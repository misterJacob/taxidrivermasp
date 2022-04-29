import React from 'react'

const AirportTransfer = (props) => {
  return (
        <div className="airport-transfer-container container">
          <h3>{props.title}</h3>
          <h4>{props.textP1}</h4>
          <p>{props.textP2}</p>
        </div>
  )
}

export default AirportTransfer



// import airportPhoto from '../componentsPhoto/airportGC.jpg'
// // import mecedes from '../componentsPhoto/mecedes.jpg'

// export default function AirportTransfer(){

//     function toggleTransfer(){
       
//         console.log("toggleTransfer");
//         const modalTransfer = document.querySelector(".modal-airport-transfer");
//         modalTransfer.classList.toggle('active')
//     }

//     return (
//       <div className="airport-transfer section" onClick={toggleTransfer}>
//         <div className="airport-transfer-container container">
//           <h3>Lufthavns Transfer</h3>
//           <p>Se vores priser på lufthavns turer</p>
//         </div>
//         <div className="modal modal-airport-transfer ">
//           <div className="modal-wrap">
//             <h1>Transfer</h1>

//             <div className="container">
//               <div className="img-wrap">
//                 <img src={airportPhoto} alt="" />
//               </div>
//               <h3>Lufthavns turer til og fra lufthavnen</h3>
//               <p className="txt">
//                 San Augustin til lufthavnen <span>30€</span>
//               </p>
//               <p className="txt">
//                 Playa del Ingles til lufthavnen <span>33€</span>
//               </p>
//               <p className="txt">
//                 maspalomas (Campo Internaional) til lufthavnen <span>35€</span>
//               </p>
//               <p className="txt">
//                 Meloneras til lufthavnen <span>40€</span>
//               </p>
//               <p>
//                 <small>priserne gælder kun for forud bestilte turer</small>
//               </p>
//             </div>

//             <div className="return-btn">
//               <div className="notice">
//                 Click Hvor som helst til at gå tilbage
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }
