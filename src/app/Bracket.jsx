'use client'
import React, { useContext, useState } from 'react';
import "./Bracket.css"
import Matchup from './Matchup';
import { sharedContext } from './Context'

const Bracket = (props) => {
  // const [players, setPlayers] = useState([]);
  // const [selectedPlayer, setSelectedPlayer] = useState('');
  // let selectedPlayers = props.selectedPlayers;
  // let advancedPlayers = props.advancedPlayers;
  // let setAdvancedPlayers = props.setAdvancedPlayers;
  // let highlightedDiv = props.highlightedDiv;
  // let handleClick = props.handleClick;

  // const [advancedPlayers, setAdvancedPlayers] = useState([]);
  const {selectedPlayers, advancedPlayers, secondRoundPlayers} = useContext( sharedContext );

  return (
      <div className="bracket">
        <div className="container">
          <div className="round-details">Round 1</div>
          <div className="round round-one">
            {/* At some point I want to make selectedPlayers be in local storage so it does not disappear when refreshing. 
            We will make a reset button that will give you a fresh bracket. */}
            <Matchup player1={selectedPlayers[0]} player2={selectedPlayers[1]} />
            <Matchup player1={selectedPlayers[2]} player2={selectedPlayers[3]} />
            <Matchup player1={selectedPlayers[4]} player2={selectedPlayers[5]} />
            <Matchup player1={selectedPlayers[6]} player2={selectedPlayers[7]} />
            <Matchup player1={selectedPlayers[8]} player2={selectedPlayers[9]} />
            <Matchup player1={selectedPlayers[10]} player2={selectedPlayers[11]} />
            <Matchup player1={selectedPlayers[12]} player2={selectedPlayers[13]} />
            <Matchup player1={selectedPlayers[14]} player2={selectedPlayers[15]} />
          </div>
        </div>
        <div className="container">
          <div className="round-details">Round 2</div>     
          <div className="round round-two">
            <Matchup player1={advancedPlayers[0]} player2={advancedPlayers[1]}/>
            <Matchup player1={advancedPlayers[2]} player2={advancedPlayers[3]}/>
            <Matchup player1={advancedPlayers[4]} player2={advancedPlayers[5]}/>
            <Matchup player1={advancedPlayers[6]} player2={advancedPlayers[7]}/>          
          </div>
        </div>
        <div className="container">
          <div class="round-details">Round 3</div>     
          <div class="round round-three">
            <Matchup player1={advancedPlayers[8]} player2={advancedPlayers[9]}/>                   
            <Matchup player1={advancedPlayers[10]} player2={advancedPlayers[11]}/>                   
          </div>
        </div> 
        <div className="container">
          <div class="round-details">championship</div>    
          <div class="round championship">
            <Matchup player1={advancedPlayers[12]} player2={advancedPlayers[13]}/>
          </div>    
        </div>
      </div>
  );
}

export default Bracket;