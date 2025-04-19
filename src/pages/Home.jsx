import Mynavbar from "../components/navbar";

function Home() {
  return (
    <div className="parent">
      <Mynavbar />
      <div className="home-container">
        <h1 className="home-head1">Welcome to My World</h1> {/* Titre principal unique */}
        
        <h2 className="home-head2">Who Am I?</h2>
        <p>
          <strong>I’m <i>Billy Doumbouya</i></strong> — entrepreneur, tech enthusiast, and lifelong learner.
        </p>

        <h3 className="home-head3">Short Bio</h3>
        <p>
          I have a background in Sociology of Health and a strong passion for
          technology. I’m currently focused on learning web development, graphic
          design, and cybersecurity, while running a mobile phone accessories
          business.
        </p>

        <h2>Key Focus Areas</h2>
        <hr />
        <ul>
          <li><span className="contact-icone">📱</span> Mobile Accessories Business</li>
          <li><span className="contact-icone">💻</span> Web Development & Cybersecurity (in training)</li>
          <li><span className="contact-icone">🎨</span> Graphic Design</li>
          <li><span className="contact-icone">📈</span> Dream: Build a tech training center</li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
