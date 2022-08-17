import React from "react";

import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'
import  mainData  from './components/main-components/mainData.js';

const App = () => {
  // const navElements = headerData.map((navItem) => {
  //   return(
  //     <Nav
  //     key={navItem.id}
  //     text={navItem.text}
  //     />
  //   )
  // })

    const mainElements = mainData.map(mainItem => {
        return(
            <Main
            key={mainItem.id}
            title={mainItem.title}
            textP1={mainItem.textP1}
            textP2={mainItem.textP2}
            modalShow={mainItem.modalShow}
            />
        )
    })

  return (
    <div>
      <Header />
      <main className="section">
      {mainElements}
      </main>
      <Footer />
    </div>
  );
};

export default App;


// export default function App(){
//     return(
//         <>
//         <Header />
//         <Main />
//         <Footer />
//         </>
//     )
// }
