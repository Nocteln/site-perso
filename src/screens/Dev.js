import "../App.css";
import CardCompetence from "../components/CardCompetence";
import didi from "../img/developpement-web.png";

function Dev() {
  const web = {
    titre: "Developpement Web",
    language: "Javascript, HTML, CSS",
    frame: "React.js",
    progress: 50,
    img: didi,
  };
  const discord = {
    titre: "Developpement Discord",
    language: "Javascript",
    frame: "Discord.js",
    progress: 25,
    img: 2,
  };
  const rbx = {
    titre: "Developpement Roblox",
    language: "Lua",
    frame: "Aucun",
    progress: 50,
    img: 3,
  };
  return (
    <>
      <CardCompetence opt={web} />
      <CardCompetence opt={discord} />
      <CardCompetence opt={rbx} />
    </>
  );
}

export default Dev;
