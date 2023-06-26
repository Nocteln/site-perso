export default function CardProject({ opt }) {
  return (
    <div className="projectAll">
      <div className="desc">
        <h1>{opt.nom}</h1>
        <h3>{opt.description}</h3>
        <a href={opt.ref}>En savoir +</a>
      </div>
      <img src={opt.img} alt={"Image de " + opt.nom} />
    </div>
  );
}
