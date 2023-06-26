import { useState } from "react";
import "../App.css";
import webimg from "../img/developpement-web.png";
import discordimg from "../img/discord.png";
import rbximg from "../img/rbx2.png";
import kstcatimg from "../img/kstcatlogo.PNG";
import ncbot from "../img/nc-bot.png";
import notBot from "../img/not-bot.png";
import noctelnGames from "../img/noctelngames.png";

import Hero from "../components/Hero";
import Propos from "../components/Propos";
import CardCompetence from "../components/CardCompetence";
import CardProject from "../components/CardProjet";

function About() {
  // state
  const projectsData = [
    {
      nom: "Normalcochon-bot",
      description: "Un bot discord fait pour un youtubeur",
      ref: "https://github.com/Nocteln/nc-bot",
      img: ncbot,
      cat: "Bot",
    },
    {
      nom: "Kstcat",
      description: "projet de science de l'ingénieur",
      ref: "https://github.com/Nocteln/kst-cat",
      img: kstcatimg,
      cat: "Site web",
    },
    {
      nom: "Not-Bot",
      description: "Bot discord multifonctions",
      ref: "https://github.com/Nocteln/not-bot",
      img: notBot,
      cat: "Bot",
    },
    {
      nom: "Nocteln Games",
      description: "Projet de NSI",
      ref: "https://github.com/Nocteln/noctelngames",
      img: noctelnGames,
      cat: "Site web",
    },
  ];
  const [composant, setComposant] = useState(2);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState("");
  // comportements

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query, selectedCategory);
  };

  // Function to filter data based on the search query
  // const filterData = (query) => {
  //   const filtered = projectsData.filter((project) =>
  //     project.nom.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category);
    filterData(searchQuery, category);
  };

  const filterData = (query, cat) => {
    // Replace the following placeholder data with your actual data source

    let filtered = projectsData;

    if (query) {
      filtered = filtered.filter((project) =>
        project.nom.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (cat) {
      filtered = filtered.filter((project) => project.cat === cat);
    }

    setFilteredData(filtered);
  };

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

  const comp3 = () => {
    setComposant(3);
  };
  const comp4 = () => {
    setComposant(4);
  };

  const comp2 = () => {
    setComposant(2);
  };

  const comp1 = () => {
    setComposant(1);
  };
  //affichage

  return (
    <div className="all">
      <nav>
        <h1 className="navlink">Eliott MIEZE</h1>
        <div>
          <ul id="navbar">
            <li className="navlink" onClick={comp1}>
              A Propos
            </li>
            <li className="navlink" onClick={comp2}>
              Portfolio
            </li>
            <li className="navlink" onClick={comp3}>
              Compétences
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
        {composant === 1 ? (
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
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </form>
              <div className="button-chercher">
                <button onClick={() => handleCategoryButtonClick("Bot")}>
                  Bots Discord
                </button>
                <button onClick={() => handleCategoryButtonClick("Site web")}>
                  Site Web
                </button>
                {/* <button onClick={() => handleCategoryButtonClick("Autres")}>
                  Autre
                </button> */}
              </div>
              {
                <button onClick={() => setFilteredData(projectsData)}>
                  Annuler la recherche
                </button>
              }
            </div>
            {/* <CardProject opt={kstcat} />
            <CardProject opt={kstcat} />
            <CardProject opt={kstcat} />
            <CardProject opt={kstcat} />
            <CardProject opt={kstcat} /> */}
            {filteredData.map((project) => (
              <CardProject key={project.nom} opt={project} />
            ))}
          </div>
        ) : (
          "salu"
        )}
      </div>
    </div>
  );
}

export default About;
