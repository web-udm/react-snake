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
    const [head, setHead] = useState(1);
    const [direction, setDirection] = useState('left');
    const squares = Array(100).fill('').map(
        (item, index) => <Square num={index + 1} head={index === head} />
    );

    function headAction(num) {
        if (++num > 100) {
            num = 1;
        }

        return num;
    }

    useEffect(() => {
        setTimeout(() => setHead(headAction(head)), 100)
    });

    return (
        <div className="game__board">
            {squares}
        </div>
    );
}

function Square(props) {
    const className = `game__square ${props.head ? 'game__square--head' : ''}`;

    return <div className={className} data-index={props.num}></div>
}

export default App;
