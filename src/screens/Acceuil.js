import React, { useState } from "react";

import "../App.css";
import webimg from "../img/developpement-web.png";
import discordimg from "../img/discord.png";
import rbximg from "../img/rbx2.png";
import kstcatimg from "../img/kstcatlogo.PNG";
import ncbot from "../img/nc-bot.png";
import notBot from "../img/not-bot.png";
import noctelnGames from "../img/noctelngames.png";
import siteperso from "../img/sitePerso.png";
import python from "../img/Python-logo-notext.svg.png";

import Hero from "../components/Hero";
import Propos from "../components/Propos";
import CardCompetence from "../components/CardCompetence";
import CardProject from "../components/CardProjet";
import CardContact from "../components/CardContact";
import RickRoll from "../components/RickRoll";
import rickRoll from "../img/rick.mp4";

function Acceuil() {
  // state
  const projectsData = [
    {
      nom: "Normalcochon-bot",
      description: "Un bot Discord fait pour un youtubeur",
      ref: "https://github.com/Nocteln/nc-bot",
      img: ncbot,
      cat: "Bot",
      btn2: [
        "inviter",
        "https://discord.com/api/oauth2/authorize?client_id=831938139500970007&permissions=8&scope=bot",
      ],
    },
    {
      nom: "Kstcat",
      description: "projet de science de l'ingénieur",
      ref: "https://github.com/Nocteln/kst-cat",
      img: kstcatimg,
      cat: "Site web",
      btn2: ["Visiter", "great-goldstine.87-106-234-10.plesk.page"],
    },
    {
      nom: "Site Perso",
      description: "Le site sur lequel vous êtes ^^",
      ref: "https://github.com/Nocteln/site-perso",
      img: siteperso,
      cat: "Site web",
    },
    {
      nom: "Not-Bot",
      description: "Bot Discord multifonctions",
      ref: "https://github.com/Nocteln/not-bot",
      img: notBot,
      cat: "Bot",
      btn2: [
        "inviter",
        "https://discord.com/api/oauth2/authorize?client_id=938161748832305224&permissions=8&scope=bot",
      ],
    },
    {
      nom: "Nocteln Games",
      description: "Projet de NSI",
      ref: "https://github.com/Nocteln/noctelngames",
      img: noctelnGames,
      cat: "Site web",
      btn2: ["visiter", "https://nocteln.space"],
    },
    {
      nom: "Generateur de video",
      description: "Générateur de vidéo par ia en python",
      ref: "https://github.com/Nocteln/video_generator",
      img: python,
      cat: "autre",
    },
  ];
  const [composant, setComposant] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(projectsData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query, selectedCategory);
  };

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category);
    filterData(searchQuery, category);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filterData = (query, cat) => {
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
    titre: "Développement Web",
    language: "Javascript, HTML, CSS",
    frame: "React.js",
    maitr: "J'ai des bases mais à consolider",
    img: webimg,
  };
  const discordcomp = {
    titre: "Développement Discord",
    language: "Javascript",
    frame: "Discord.js",
    maitr: "De bonnes bases",
    img: discordimg,
  };
  const rbxcomp = {
    titre: "Développement Roblox",
    language: "Lua",
    frame: "Aucun",
    maitr: "Plus fort en build qu'en code",
    img: rbximg,
  };

  const comp3 = () => {
    setComposant(3);
    setIsMenuOpen(false);
    const comp = document.querySelector(".comp");
    const all = document.querySelectorAll(".navlink");
    all.forEach((e) => {
      e.classList.remove("active");
    });
    comp.classList.add("active");
  };
  const comp4 = () => {
    setIsMenuOpen(false);
    setComposant(4);
    const comp = document.querySelector(".cont");
    const all = document.querySelectorAll(".navlink");
    all.forEach((e) => {
      e.classList.remove("active");
    });
    comp.classList.add("active");
  };

  const comp2 = () => {
    setComposant(2);
    setIsMenuOpen(false);

    const comp = document.querySelector(".port");
    const all = document.querySelectorAll(".navlink");
    all.forEach((e) => {
      e.classList.remove("active");
    });
    comp.classList.add("active");
  };

  const comp1 = () => {
    setComposant(1);
    setIsMenuOpen(false);
    const comp = document.querySelector(".prop");
    const all = document.querySelectorAll(".navlink");
    all.forEach((e) => {
      e.classList.remove("active");
    });
    comp.classList.add("active");
  };

  function rickroll5() {
    setComposant(5);
  }

  return (
    <div className="all">
      <nav>
        <h1 className="navlink">Eliott MIEZE</h1>
        <ul id="navbar" className={isMenuOpen ? "open" : ""}>
          <li className="navlink prop" onClick={comp1}>
            A Propos
          </li>
          <li className="navlink port" onClick={comp2}>
            Portfolio
          </li>
          <li className="navlink comp" onClick={comp3}>
            Compétences
          </li>
          <li className="navlink cont" onClick={comp4}>
            Contact
          </li>
        </ul>
        <div className="toggle-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
      <div className="page">
        <Hero />
        {composant === 1 ? (
          <div className="tout-comp">
            <Propos onRick={rickroll5} />
          </div>
        ) : composant === 3 ? (
          <div className="tout-comp">
            <CardCompetence opt={webcomp} />{" "}
            <CardCompetence opt={discordcomp} />
            <CardCompetence opt={rbxcomp} />
          </div>
        ) : composant === 4 ? (
          <CardContact />
        ) : composant === 2 ? (
          <div className="tout-comp">
            <div className="chercher">
              <form>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onSubmit={(e) => e.preventDefault()}
                />
              </form>
              <div className="button-chercher">
                <button onClick={() => handleCategoryButtonClick("Bot")}>
                  Bots Discord
                </button>
                <button onClick={() => handleCategoryButtonClick("Site web")}>
                  Site Web
                </button>
                <button onClick={() => handleCategoryButtonClick("autre")}>
                  Autres...
                </button>
              </div>
              {
                <button onClick={() => setFilteredData(projectsData)}>
                  Annuler la recherche
                </button>
              }
            </div>
            {filteredData.map((project) => (
              <CardProject key={project.nom} opt={project} />
            ))}
          </div>
        ) : composant === 5 ? (
          <video autoPlay loop>
            <source src={rickRoll} type="video/mp4" />
          </video>
        ) : (
          "salu"
        )}
      </div>
    </div>
  );
}

export default Acceuil;
