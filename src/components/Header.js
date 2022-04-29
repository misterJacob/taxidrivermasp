import Language from './header-components/Language.js'
import Nav from './header-components/Nav.js'
import ModalEmail from './header-components/ModalEmail.js'
import headerData from './header-components/headerData.js';


export default function Header() {

  // const navElements = headerData.map((navItem) => {
  //   return(
  //     <Nav 
  //     key={navItem.id}
  //     text={navItem.text}
  //     />
  //   )
  // })
  
  return (
    <header>
        <div className="title ">
            <h1>Taxi Driver Maspalomas</h1>
        </div>
        <Language />
        <Nav />
        <ModalEmail />
    </header>
  );
}

        // {
        //   navElements;
        // }
