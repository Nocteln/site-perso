import "../App.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="divHero">
        <img src={require("../img/myAvatar.png")} alt="profile" />
        <div>
          <h1>Eliott MIEZE</h1>
          <div className="barre"></div>
          <p className="textHero">
            Je m'appelle Eliott, j'ai 16 ans et je suis passionné de
            programmation depuis 5 ans. J'ai exploré le développement de jeux
            sur Roblox, le développement web et la création de bots Discord. Je
            prévois de poursuivre mes études dans l'informatique pour devenir un
            développeur talentueux et polyvalent
          </p>
          <h3>Mes réseaux :</h3>
          <ul>
            <li>
              <a href="https://github.com/Nocteln" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nocteln/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/562693590514532362"
                target="_blank"
              >
                <i class="fa-brands fa-discord"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eliott-mieze-b15114232/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="barre2"></div>
    </div>
  );
}
