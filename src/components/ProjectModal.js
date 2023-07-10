function ProjectModal({ obj }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              obj.close(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{obj.title}</h1>
        </div>
        <div className="body">
          <p>{obj.body}</p>
        </div>
        <div className="footer">
          <a href={obj.href1} target="_blank">
            {obj.btn1}
          </a>
          <a href={obj.href2} target="_blank">
            {obj.btn2}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
