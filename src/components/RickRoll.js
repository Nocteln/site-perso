import rickRoll from "../img/rick.mp4";

export default function RickRoll() {
  return (
    <>
      <video controls>
        <source src="public/t.mp4" type="video/mp4" />
      </video>
      <video controls>
        <source src={rickRoll} type="video/mp4" />
      </video>
    </>
  );
}
