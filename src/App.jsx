import illustration from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp";

function App() {
  return (
    <>
      <main>
        <img
          className="illustration"
          src={illustration}
          alt="Illustration Article"
        ></img>
        <div className="content">
          <div className="box-learning">Learning</div>
        </div>
        <div className="published">Published 21 Dec 2023</div>
        <div className="title">
          <a className="title-click">HTML & CSS foundations</a>
        </div>
        <div className="description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </div>
        <div className="creator">
          <img className="avatar" src={avatar} alt="Greg Hooper"></img>
          <div className="creator-name">Greg Hooper</div>
        </div>
      </main>
    </>
  );
}

export default App;
