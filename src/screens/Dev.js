import { useState } from "react";
import "../App.css";
import webimg from "../img/developpement-web.png";
import discordimg from "../img/discord.png";
import rbximg from "../img/rbx2.png";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Propos from "../components/Propos"
import CardCompetence from "../components/CardCompetence";

function About() {
  // state
  const [composant, setComposant] = useState(1)

  // comportements

  const web = {
    titre: "Developpement Web",
    language: "Javascript, HTML, CSS",
    frame: "React.js",
    progress: 50,
    img: webimg,
  }
  const discord = {
    titre: "Developpement Discord",
    language: "Javascript",
    frame: "Discord.js",
    progress: 25,
    img: discordimg,
  };
  const rbx = {
    titre: "Developpement Roblox",
    language: "Lua",
    frame: "Aucun",
    progress: 50,
    img: rbximg,
  };

  const comp3 = () => {
    setComposant(3)
  }
  const comp4 = () => {
    setComposant(4)
  }
  
  const handleClick = () => {
    setComposant(2)
    console.log(composant)
  }
  //affichage

  return (
    <div className="all">
      <nav>
          <h1 className="navlink">Eliott MIEZE</h1>
        <div>
          <ul id="navbar">
            <li className="navlink">
              1
            </li>
            <li className="navlink"> 
              2
            </li>
            <li className="navlink" onClick={comp3}> 
             3
            </li>
            <li className="navlink" onClick={comp4}>
           4
            </li>
            <li className="navlink">
           5
            </li>
          </ul>
        </div>
      </nav>
      <div className="page">
        <Hero />
        {composant===4? <Propos /> : composant===3 ? <div className="tout-comp"><CardCompetence opt={web}/> <CardCompetence opt={discord} /><CardCompetence opt={rbx} /></div>:"salu"}
      </div>
    </div>
  );
}

export default About;
