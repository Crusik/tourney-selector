// import React from 'react';

// function Score() {
//   const [score, setScore] = React.useState(82);

//   const handleChange = (e) => {
//     const value = parseInt(e.target.value);
//     setScore(isNaN(value) ? 0 : value);
//   };

//   return (
//     <input
//       type="number"
//       className="score"
//       value={score}
//       onChange={handleChange}
//     />
//   );
// }

// export default Score;

// import React from 'react';
// import './Score.css'

// function Score() {
  //   const [score, setScore] = React.useState('0');
  
  //   const handleChange = (e) => {
    //     const value = parseInt(e.target.value);
    //     setScore(isNaN(value) ? 0 : value);
    //   };
    
    //   return (
      //     <span className="score" contentEditable="true" onBlur={handleChange}>
      //       {score}
      //     </span>
      //   );
      // }
      
      // export default Score;
      
      
import React, { useState } from 'react';
import './Score.css'

function Score() {
  const [score, setScore] = useState('');

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setScore(isNaN(value) ? '' : value);
  };

  return (
    <input
      type="number"
      className="score"
      placeholder=""
      value={score}
      onChange={handleChange}
    />
  );
}

export default Score;
