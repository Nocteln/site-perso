import "../App.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="divHero">
        <img src={require("../img/pdp.png")} alt="profile" />
        <div>
          <h1>Eliott MIEZE</h1>
          <div className="barre"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            itaque repudiandae sequi officiis ducimus expedita sapiente omnis
            eveniet consequatur nostrum ratione numquam unde nemo laboriosam id
            cupiditate, nulla quos hic.
          </p>
          <button>Télécharger mon CV</button>
        </div>
      </div>
      <div className="barre2"></div>
    </div>
  );
}
