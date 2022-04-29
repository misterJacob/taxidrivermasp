import React 
// ,{useState} 
from 'react';


// import textInformation from "./textInformation.js";


export default function InfoCard(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  


  return (

    <div className="section" onClick={toggleShown}>
      <h2>{props.title}</h2>
      {isShown && (
        <div>
          {props.textP1 && <p>{props.textP1}</p>}
          <p>{props.textP2}</p>
        </div>
      )}
    </div>
    
  );
}
