import "../App.css";
import CardCompetence from "../components/CardCompetence";
import Header from "../components/Header";
import Hero from "../components/Hero";
import webimg from "../img/developpement-web.png";
import discordimg from "../img/discord.png";
import rbximg from "../img/rbx2.png";

function Skills() {
  // state
  const web = {
    titre: "Developpement Web",
    language: "Javascript, HTML, CSS",
    frame: "React.js",
    progress: 50,
    img: webimg,
  };
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

  // comportements

  //affichage

  return (
    <div className="all">
      <Header />

      <div className="page">
        <Hero />
        <div>
          <CardCompetence opt={web} />
          <CardCompetence opt={discord} />
          <CardCompetence opt={rbx} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
