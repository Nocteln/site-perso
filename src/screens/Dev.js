import { useState } from "react";
import "../App.css";
import webimg from "../img/developpement-web.png";
import discordimg from "../img/discord.png";
import rbximg from "../img/rbx2.png";
import kstcatimg from "../img/kstcatlogo.PNG";

import Hero from "../components/Hero";
import Propos from "../components/Propos";
import CardCompetence from "../components/CardCompetence";
import CardProject from "../components/CardProjet";

function About() {
  // state
  const [composant, setComposant] = useState(2);

  // comportements

  const webcomp = {
    titre: "Developpement Web",
    language: "Javascript, HTML, CSS",
    frame: "React.js",
    maitr: "J'ai des bases mais à consolider",
    img: webimg,
  };
  const discordcomp = {
    titre: "Developpement Discord",
    language: "Javascript",
    frame: "Discord.js",
    maitr: "De bonnes bases",
    img: discordimg,
  };
  const rbxcomp = {
    titre: "Developpement Roblox",
    language: "Lua",
    frame: "Aucun",
    maitr: "Plus fort en build qu'en code",
    img: rbximg,
  };

  const kstcat = {
    nom: "Kstcat",
    description: "projet de science de l'ingénieur",
    ref: "https://github.com/Nocteln/kst-cat",
    img: kstcatimg,
  };

  const comp3 = () => {
    setComposant(3);
  };
  const comp4 = () => {
    setComposant(4);
  };

  const comp2 = () => {
    setComposant(2);
  };

  //affichage

  return (
    <div className="all">
      <nav>
        <h1 className="navlink">Eliott MIEZE</h1>
        <div>
          <ul id="navbar">
            <li className="navlink">1</li>
            <li className="navlink" onClick={comp2}>
              2
            </li>
            <li className="navlink" onClick={comp3}>
              3
            </li>
            <li className="navlink" onClick={comp4}>
              4
            </li>
            <li className="navlink">5</li>
          </ul>
        </div>
      </nav>
      <div className="page">
        <Hero />
        {composant === 4 ? (
          <Propos />
        ) : composant === 3 ? (
          <div className="tout-comp">
            <CardCompetence opt={webcomp} />{" "}
            <CardCompetence opt={discordcomp} />
            <CardCompetence opt={rbxcomp} />
          </div>
        ) : composant === 2 ? (
          <div className="tout-comp">
            <div className="chercher">
              <form>
                <input type="text" placeholder="Rechercher..." />
              </form>
              <div className="button-chercher">
                <button>categorie 1</button>
                <button>categorie 2</button>
                <button>categorie 3</button>
              </div>
            </div>
            <CardProject opt={kstcat} />
            <CardProject opt={kstcat} />
            <CardProject opt={kstcat} />
            <CardProject opt={kstcat} />
            <CardProject opt={kstcat} />
          </div>
        ) : (
          "salu"
        )}
      </div>
    </div>
  );
}

export default About;
