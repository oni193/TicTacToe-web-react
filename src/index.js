import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import styled from 'styled-components';


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

  function setSquaresValue(i){
    const squaresArray = squares.slice();
    squaresArray[i] ='X';
    setSquares(squaresArray);
  }

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
  
  const status = 'Next player : X';
    
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


const Square = (props) => {
  return(
    <button 
    className="square" 
    onClick={() => {
      props.setSquaresValue("x") 
      }}>
      {props.squareValue}
    </button>
  );
}


  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );