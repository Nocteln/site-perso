import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";

function About() {
  // state

  // comportements

  //affichage

  return (
    <div className="all">
      <Header />
      <div className="page">
        <Hero />
        <div className="propos">
          <h1>A Propos</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            voluptate vitae doloribus nobis alias accusantium perspiciatis
            beatae ipsum numquam aspernatur quas labore, temporibus eveniet
            nulla?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            voluptate vitae doloribus nobis alias accusantium perspiciatis
            beatae ipsum numquam aspernatur quas labore, temporibus eveniet
            nulla?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
