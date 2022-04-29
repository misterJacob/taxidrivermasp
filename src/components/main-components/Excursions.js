import imgGC from "../../Photo/sky-view-GC.jpg";

export default function Excursions() {
  function modalExcursions() {
    console.log("modalExcursions");
    const modalExcursion = document.querySelector(".modal-excursions");
    modalExcursion.classList.toggle("active");
  }

  return (
    <div className="excursions section" onClick={modalExcursions}>
      <div className="excursions-container container  ">
        <h3>Skræder sy din udflugt på øen</h3>
        <p>Vælg selv hvor lang din udflugt skal være</p>
      </div>

      <div className="modal-excursions ">
        <h1 className="excursion-title">Se Gran Canaria</h1>
        <div className="img-wrap">
          <img src={imgGC} alt="" className="img-gc" />
        </div>
        <div className="text-wrap">
          <h3>Planlæg din udflugt som det passer dig.</h3>
          <p className="txt">
            Pris pr Time er mellem <span>25€ og 28€</span>
          </p>
          <p className="txt">bekræft med chauføren</p>
          <div className="notice">Click Hvor som helst til at gå tilbage</div>
        </div>
      </div>
    </div>
  );
}
