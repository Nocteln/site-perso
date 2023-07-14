export default function CardProject({ opt }) {
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
    </div>
  );
}
