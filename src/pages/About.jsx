import Mynavbar from "../components/navbar";

function About() {
  return (
    <div className="parent">
      <Mynavbar />
      <div className="about-container">
        <h1 className="about-head1">Welcome!</h1>
        <h3 className="about-head3">Thank you for stopping by. I'm truly happy to have you here!</h3>

        <p className="about-para">
          My name is Billy Doumbouya — a passionate learner, entrepreneur, and
          digital enthusiast. I hold a degree in Sociology of Health, but my
          curiosity and drive have led me to explore new horizons in technology,
          including graphic design, cybersecurity, and web development.{" "}
        </p>
<hr />
        <p className="about-para">
          I’m also the proud owner of a small business specializing in mobile
          phone accessories, where I’ve been navigating the world of commerce
          with dedication and perseverance.
              </p>
              <hr />
        <p className="about-para">
          Beyond business, my biggest goal is to establish a tech training
          center that empowers young people with digital skills and inspires
          positive change in my community and beyond.
              </p>
              <hr />
        <p className="about-para">
          Here, I’ll be sharing parts of my journey — the wins, the lessons, and
          the dreams. Let’s grow, connect, and create something meaningful
          together!
        </p>
      </div>
    </div>
  );
}
export default About;
