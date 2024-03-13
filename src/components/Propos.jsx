export default function Propos({ onRick }) {
  return (
    <div className="propos">
      <h1>A Propos</h1>
      <p>
        Bonjour, je m'appelle{" "}
        <span onClick={onRick} style={{ color: "#fe0015" }}>
          Eliott
        </span>{" "}
        et je suis passionné de programmation depuis quelques années. À{" "}
        <strong>16 ans</strong>, je consacre une grande partie de mon temps à
        créer toutes sortes de <strong>programmes</strong>. Mon objectif est de
        poursuivre mes études dans le domaine de l'informatique et de devenir un
        développeur.
      </p>
      <p>
        J'ai découvert ma passion pour la <strong>programmation</strong> il y a
        environ 5 ans, lorsque j'ai commencé à explorer le monde de la création
        de jeux en utilisant{" "}
        <span style={{ color: "#fe0015" }}>Roblox Studio</span>, où j'ai pu
        donner vie à mes idées et apprendre les bases de la logique
        informatique.
      </p>
      <p>
        Au fil du temps, j'ai élargi mes horizons en me plongeant dans le
        <span style={{ color: "#fe0015" }}> développement web</span>. J'ai
        appris les langages HTML, CSS et JavaScript, et j'ai pu créer des sites
        web. Cela m'a permis d'explorer les possibilités offertes par le web et
        de développer mes compétences en programmation.
      </p>
      <p>
        N'hésitez pas à me <strong>contacter</strong> si vous souhaitez discuter
        de projets, partager des idées ou simplement en savoir plus sur mon
        parcours. Cela me ferait plaisir d'échanger avec vous afin d'apprendre
        de nouvelles choses et de partager.
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
          <i
            class="fa-brands fa-discord"
            onClick={() => {
              alert("pseudo discord : nocteln");
            }}
          ></i>
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
  );
}
