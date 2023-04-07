import "./HomePage.scss";

import { DiReact } from "react-icons/di";
import { HiPaintBrush } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section id="hero" className="bg-primary">
        <div className="row">
          <header className="col-6">
            <h1 className="font-lg">Connor Silloway</h1>
            <p>Subheading thing is here</p>
            <Link to="/projects">
              <button>
                See Projects
              </button>
            </Link>
          </header>
          <div className="col-6">
            <img id="hero-image" src="/cropped.jpg" alt="Image of Connor Silloway" />
          </div>
        </div>
      </section>
      <section className="shift-upwards text-center" id="how-section">
        <h2>How Did I Do It/</h2>
        <div className="row font-md">
          <article className="col-12-xs col-4">
            <HiPaintBrush></HiPaintBrush>
            <h3>Structured Styling</h3>
          </article>
          <article className="col-12-xs col-4 ">
            <DiReact></DiReact>
            <h3>Strong Framework</h3>
          </article>
          <article className="col-12-xs col-4">
            
            <h3></h3>
          </article>
        </div>


      </section>
    </>
  );
}

export default HomePage;