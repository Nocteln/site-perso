// import { useState } from "react";
// import ProjectModal from "../components/ProjectModal";

export default function CardProject({ opt }) {
  // const [openModal, setOpenModal] = useState(false);
  // const t = {
  //   title: "test",
  //   body: "tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
  //   href1: "https://google.com",
  //   btn1: "cc",
  //   href2: "https://google.com",
  //   btn2: "cc",
  //   close: setOpenModal,
  // };

  return (
    <div className="projectAll">
      <div className="desc">
        <h1>{opt.nom}</h1>
        <h3>{opt.description}</h3>
        <a href={opt.ref} target="_blank">
          En savoir +
        </a>
        {opt.btn2 ? (
          <a href={opt.btn2[1]} target="_blank">
            {opt.btn2[0]}
          </a>
        ) : (
          <p />
        )}
      </div>
      <img src={opt.img} alt={"Image de " + opt.nom} />
      {/* {openModal && <ProjectModal obj={t} />} */}
    </div>
  );
}

/*button
          onclick={() => {
            setOpenModal(true);
          }}
        >*/
