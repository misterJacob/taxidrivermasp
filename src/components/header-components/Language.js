import DK from "../componentsPhoto/dk.svg";
import GB from "../componentsPhoto/gb.svg";
import ES from "../componentsPhoto/es.svg";
import DE from "../componentsPhoto/de.svg";

export default function Language() {
      function chooseLang(e) {
        console.log("valgt");
      }

  return (
    <div className="language">
      <div className="choose-lang lang-dk" onClick={chooseLang}>
        <img src={DK} className="flag dk" alt="dansk" />
      </div>
      <div className="choose-lang lang-eng" onClick={chooseLang}>
        <img src={GB} className="flag eng" alt="english" />
      </div>
      <div className="choose-lang lang-es" onClick={chooseLang}>
        <img src={ES} className="flag es" alt="Español" />
      </div>
      <div className="choose-lang lang-de" onClick={chooseLang}>
        <img src={DE} className="flag de" alt="deutsch" />
      </div>
    </div>
  );
}
