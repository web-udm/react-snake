import './App.css';
import {useState, useEffect} from "react";

function App() {
    return (
        <div className="game">
            <Board/>
        </div>
    );
}

function Board() {
    const [bodyPosition, setBodyPosition] = useState([50, 51, 52, 53]);

    const squares = Array(100).fill(null).map((item, index) => {
         return <Square body={bodyPosition.indexOf(index) !== -1} num={index + 1}/>;
    });

    function calculateBodyPosition(bodyPosition) {
        return bodyPosition.map((item) => {
            item = ++item > 100 ? 1 : item;

            return item;
        });
    }

    useEffect(() => {
        setTimeout(() => setBodyPosition(calculateBodyPosition(bodyPosition)), 100)
    });

    return (
        <div className="game__board">
            {squares}
        </div>
    );
}

function Square(props) {
    const className = `game__square ${props.body ? 'game__square--head' : ''}`;

    return <div className={className} data-index={props.num}></div>
}

export default App;
