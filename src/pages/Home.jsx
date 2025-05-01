import React, { useEffect, useState } from "react";
import axios from "axios";
import Profilecard from "../components/Profilecard";
function Home() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const based_liink = "http://localhost:3000";

    const userInfo = async () => {
      try {
        const response = await axios.get(`${based_liink}/users`);
        console.log(response);
        setUserData(response.data);
      } catch (err) {
        setError("impossible de charger les donnees");
        console.log(err);
      }
    };
    userInfo();
  }, []);

  return (
    <div className="parent">
      <h1 className="text-warning fs-1 fw-bold mb-2 mt-2 text-center">
        List Of Users
      </h1>
      <div className="Parent-profile-card">
        {userData.map((user, index) => (
          <Profilecard key={index} {...user} />
        ))}
      </div>

      <div className="home-container">
        <h1 className="home-head1">Welcome to My World</h1>{" "}
        {/* Titre principal unique */}
        <h2 className="home-head2">Who Am I?</h2>
        <p>
          <strong>
            I’m <i>Billy Doumbouya</i>
          </strong>{" "}
          — entrepreneur, tech enthusiast, and lifelong learner.
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
          <li>
            <span className="contact-icone">📱</span> Mobile Accessories
            Business
          </li>
          <li>
            <span className="contact-icone">💻</span> Web Development &
            Cybersecurity (in training)
          </li>
          <li>
            <span className="contact-icone">🎨</span> Graphic Design
          </li>
          <li>
            <span className="contact-icone">📈</span> Dream: Build a tech
            training center
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
