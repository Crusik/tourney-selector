import React, { useContext, useState } from 'react';
import Player from './Player';
import Score from './Score';
import './Matchup.css'
import Bracket from './Bracket';
import { sharedContext } from './Context'

// For the first roung the Player name prop will be filled by pulling a random selection from an "array" that is filled from a list displayed on the page. This list will be generated
// from an input field that the User will put in each player/team that will be involved in the Tournament.
// In the second round and beyond the player prop will be filled by selecting a player from the previous match up.
function Matchup({player1, player2}) {

  // let advancedPlayers = props.advancedPlayers;
  // let setAdvancedPlayers = props.setAdvancedPlayers;
  // let handleClick = props.handleClick;
  // let highlightedDiv = props.highlightedDiv;
  const {setAdvancedPlayers, advancedPlayers} = useContext( sharedContext );
  
  const [highlightedDiv, setHighlightedDiv] = useState(null);

  const handleClick = (team, playerName) => {
    const confirmResponse = window.confirm("Did this team win?");
    if (confirmResponse) {
      setHighlightedDiv(team);
      setAdvancedPlayers(prevPlayers => [...prevPlayers, playerName]);
      console.log(advancedPlayers)
    }
  };


  // let selectedPlayers = props.selectedPlayers;

  return (
    <div className="matchup">
      <div className={`team team-top ${highlightedDiv === 'team-top' ? 'highlighted' : ''}`}
          onClick={() => handleClick('team-top', player1)}  
    >
        <Player playerName={player1} score={<Score />}/>
      </div>
      <div className={`team team-bottom ${highlightedDiv === 'team-bottom' ? 'highlighted' : ''}`}
        onClick={() => handleClick('team-bottom', player2)}>
        <Player playerName={player2}  score={<Score />}/>
      </div>
    </div>
  );
}

//   return (
//     <div className="matchup">
//       {player1 !== undefined && (
//         <div className="team team-top">{player1 !== undefined ? player1 : ''}</div>
//       )}
//       {player2 !== undefined && (
//         <div className="team team-bottom">{player2 !== undefined ? player2 : ''}</div>
//       )}
//     </div>
//   );
// }

export default Matchup;
