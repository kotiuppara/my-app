import React ,{useState} from 'react';
import Box from './Box';
import Form from './Form';
import './App.css';
function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [start, setStart] = useState(false);
  const gameStart = () => {
    setStart(true);
  }
  const changeUser = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };
  const changeCPlayer = () => {
    setCurrentPlayer('X');
  };
  return (
    <><center className='mainHeading'>TIC-TAC-TOE</center>
    <div className='container'>
      <div className='row p-2'>
        <div className='col-md-4 offset-md-1'>
          <Form currentPlayer={currentPlayer} gameStart={gameStart}/>
        </div>
        <div className='col-md-6 offset-md-1'>
          <Box currentPlayer={currentPlayer} start={start} changeUser={changeUser} changeCPlayer={changeCPlayer}/>
        </div>
      </div>
    </div></>
  );
}
export default App;