"use client"
import { useState } from 'react'
import Bracket from './Bracket'
import PlayerList from './PlayerList'
import './page.css'
import { sharedContext } from './Context'


export default function Home() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  // I need the following to keep an index so each matchup can only go to the specific matchup it should go to
  const [advancedPlayers, setAdvancedPlayers] = useState([]);
  const [secondRoundPlayers, setSecondRoundPlayers] = useState([]);
  // const [highlightedDiv, setHighlightedDiv] = useState(null);

  // const handleClick = (team, playerName) => {
  //   const confirmResponse = window.confirm("Did this team win?");
  //   if (confirmResponse) {
  //     setHighlightedDiv(team);
  //     setAdvancedPlayers(prevPlayers => [...prevPlayers, playerName]);
  //     console.log(advancedPlayers)
  //   }
  // };

  const handleResetBracket = () => {
    setPlayers([]);
    setSelectedPlayers([]);
    setAdvancedPlayers([]);
  }


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
      // const selectedPlayers = players[randomIndex];
      setSelectedPlayers((prevselectedPlayers) => {
        const updatedselectedPlayers = [...prevselectedPlayers];
        updatedselectedPlayers.push(players[randomIndex]);
        return updatedselectedPlayers;
      });
      // setSelectedPlayer((prevPlayers) => [...prevPlayers, selectedPlayer])
      handleRemovePlayer(randomIndex);
    }
  };

  return (
    <div className='page'>
      <sharedContext.Provider value={{ selectedPlayers, setSelectedPlayers, setAdvancedPlayers, advancedPlayers, setSecondRoundPlayers, secondRoundPlayers }}>
        <Bracket />
        <PlayerList setPlayers={setPlayers} players={players} newPlayer={newPlayer} setNewPlayer={setNewPlayer} handleRemovePlayer={handleRemovePlayer} handleRandomPick={handleRandomPick} setSelectedPlayers={setSelectedPlayers} handleResetBracket={handleResetBracket}/>
      </sharedContext.Provider>
    </div>
  )
}
