export default function CardCompetence({ opt }) {
  return (
    <div className="card-competence">
      <div className="part1">
        <h2>{opt.titre}</h2>
        <div>
          <p>Languages utilisé : {opt.language}</p>
          <p>Framework utilisé : {opt.frame}</p>
          <p>Maitrise estimée : </p>
         
        </div>
      </div>
      <div className="image-container">
        <img src={opt.img} alt={"image de " + opt.titre} />
      </div>
    </div>
  );
}
// {titre, language, framework, maitrise, icon}
