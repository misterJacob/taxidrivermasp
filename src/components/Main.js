// import AirportTransfer from "./main-components/AirportTransfer.js";
// import Excursions from './main-components/Excursions.js';
// import Information from './main-components/Information.js';




import React from 'react'

const Main = (props) => {
  return (
        <div className="section container">
          { props.title && <h3>{props.title}</h3>}
          { props.textP1 && <h4>{props.textP1}</h4>}
          {props.textP2 && <p>{props.textP2}</p>}
        </div>
  )
}

export default Main
