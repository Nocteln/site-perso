import "../App.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="divHero">
        <img src={require("../img/pdp.png")} alt="profile" />
        <div>
          <h1>Eliott MIEZE</h1>
          <div className="barre"></div>
          <p className="textHero">
            Je m'appelle Eliott, j'ai 16 ans et je suis passionné de
            programmation depuis 5 ans. J'ai exploré le développement de jeux
            sur Roblox, le développement web et la création de bots Discord. Je
            prévois de poursuivre mes études dans l'informatique pour devenir un
            développeur talentueux et polyvalent.uam?
          </p>
          <button>Télécharger mon CV</button>
        </div>
      </div>
      <div className="barre2"></div>
    </div>
  );
}
