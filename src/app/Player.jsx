import React, { useState } from 'react';
import './Player.css'


function Player(props) {

  // const [isHighlighted, setIsHighlighted] = useState(false);

  // const handleClick = () => {
  //   setIsHighlighted(!isHighlighted);
  // };

  // const divStyle = {
  //   backgroundColor: isHighlighted ? 'lightgreen' : 'white',
  //   // border: '1px solid black',
  // };

  return (
    <div className='player'>
      {/* {props.playerName} */}
      <span className="player-name">{props.playerName}</span>
      <span className="player-score">{props.score}</span>
    </div>
  );
}

export default Player;
