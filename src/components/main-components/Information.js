import React 
// ,{useState} 
from 'react'
import textInformation from './mainData.js'
import InfoCard  from './InfoCard.js';


export default function Information(){

      function informationToggle() {
        // console.log("modalExcursions");
        const information = document.querySelector(".modal-information");
        information.classList.toggle('active');
      }
            // function informationClose() {
            //   const information = document.querySelector(".modal-information");
            //   information.classList.remove("active");
            //   console.log("close");
            // }


       const infoElements = textInformation.map((info) => {
         return (
           <InfoCard
             key={info.id}
             title={info.title}
             textP1={info.textP1}
             textP2={info.textP2}
           />
         );
       });

    return (
      <div className="section information">
        <div className="information-container container">
          <div className="burger-wrap" onClick={informationToggle}>
            <div className="burger"></div>
          </div>
          <h3>Vigtigt ! </h3>
          <p>Oplysninger og Tips</p>
        </div>
        <div className="modal modal-information ">
          <div className="content-wrap">
            {infoElements}
            <button
              className="btn-close btn"
               onClick={informationToggle}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
}

    // function informationOpen(){
    //     const information = document.querySelector(".modal-information");
    //     information.classList.add("active");
    // }
    // function informationClose(){
    //     const information = document.querySelector(".modal-information");
    //     information.classList.remove("active");
    // }
