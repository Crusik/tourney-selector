"use client"
import React, { useContext } from 'react';
import './PlayerList.css';
import page from './page'
import { sharedContext } from './Context'

// Once the first round (16 players) have been selected, I want the playerList component to become disabled.
// In the end I want this to be a collaspable tab that the user can shrink down once the players are selected.
const PlayerList = (props) => {
  // This is the array of all the Current Players that can be selected.
  // New Player is going to the Player List before the bracket is made.
  let players = props.players;
  let setPlayers = props.setPlayers;
  let newPlayer = props.newPlayer;
  let setNewPlayer = props.setNewPlayer;
  // let selectedPlayers = props.selectedPlayers;
  let setSelectedPlayers = props.setSelectedPlayers;
  let handleResetBracket = props.handleResetBracket;

  const {selectedPlayers} = useContext( sharedContext );

  const handleInputChange = (e) => {
    setNewPlayer(e.target.value);
  };
  
  const handleEnterButtonClick = () => {
    if (newPlayer.trim() !== '') {
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
      setNewPlayer('');
    }
    console.log(newPlayer)
    console.log(players)

  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEnterButtonClick();
    }
  };
  
  const handleRemovePlayer = (index) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers.splice(index, 1);
      return updatedPlayers;
    });
  };
  
  const handleRandomPick = () => {
    if (players.length > 0) {
      const randomIndex = Math.floor(Math.random() * players.length);
      setSelectedPlayers((prevselectedPlayers) => {
        const updatedselectedPlayers = [...prevselectedPlayers];
        updatedselectedPlayers.push(players[randomIndex]);
        return updatedselectedPlayers;
      });
      handleRemovePlayer(randomIndex);
      console.log(selectedPlayers)
      // console.log(selectedPlayers)
      // console.log(randomIndex)
      // console.log(players[randomIndex])
      // console.log(matchupPlayers)
    }
  };
  
  return (
    <div className="playerlist">
      <h2>Player List</h2>
      <input
        className='input'
        type="text"
        value={newPlayer}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter a name"
        />
      <button className="button playerlist-button" onClick={handleEnterButtonClick}>
        Enter
      </button>
      <button className="button playerlist-button" onClick={handleRandomPick}>
        Random Pick
      </button>
      <ul className="playerlist-names">
        {players.map((player, index) => (
          <li key={index}>
            {player}
            <button className="remove-button" onClick={handleRemovePlayer}>
              X
            </button>
          </li>
        ))}
      </ul>
      {/* <div>
        <page newPlayer={newPlayer} />s
      </div> */}
      <button className='button reset-button' onClick={handleResetBracket}>Reset Bracket</button>
    </div>
  );
}

export default PlayerList;

      // <div className='button-div'>
      //   <button className='colored-button glow-effect'>
      //     Hello there!
      //     <svg className='glow-container'>
      //       <rect pathLength='100' stroke-linecap='round' className='glow-blur'></rect>
      //       <rect pathLength='100' stroke-linecap='round' className='glow-line'></rect>
      //     </svg>
      //   </button>
      // </div>