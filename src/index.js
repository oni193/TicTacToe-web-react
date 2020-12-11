import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import styled from 'styled-components';


const CalculateWinner = (squares) => {
  const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return(null);
}


const Game = () => {
  return(
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <div>{/* TODO */}</div>
      </div>
    </div>
  ); 
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsnext, setXIsnext] = useState(true);


  function setSquaresValue(i){
    const squaresArray = squares.slice();
    squaresArray[i] =xIsnext ? 'X' : 'O';
    setSquares(squaresArray);
    setXIsnext(!xIsnext);
  }


  const status = "Next player : " + (xIsnext? 'X' : 'O');

  const renderSquare = (i) => {

    return (
      <Square
        squareValue={squares[i]}
        setSquaresValue={() =>{
          setSquaresValue(i)
        }}
        />
    );
  }
  
    
  return(
    <div className="boardContainer">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>    
  );
}


<<<<<<< HEAD
const Square = (props) => {
  return(
    <button 
    className="square" 
    onClick={() => {
      props.setSquaresValue("x") 
      }}>
      {props.squareValue}
=======
const Square = (props: SquareProps) => {
  const [value, setValue] = useState(null);

  return(
    <button className="square" onClick={() => { setValue('x') }}>
      {value}
>>>>>>> origin/master
    </button>
  );
}


  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );