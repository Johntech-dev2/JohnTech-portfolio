import React from "react";
import Typical from "react-typical";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://web.facebook.com/profile.php?id=100089760934929"> 
              <i className="fa fa-facebook-square" />
            </a>
            <a href="https://www.instagram.com/alinmolayanjohn/">
              <i class="bi bi-instagram" />
            </a>
            <a href="https://twitter.com/johnayomide50">
              <i className="fa fa-twitter-square" />
            </a>
            <a href="https://www.linkedin.com/in/john-tech-742782275/">
              <i class="bi bi-linkedin" />
            </a>
          </div>
      </div>
      <div className="profile-details-name">
        <h4>Hello, I'M <span className="highlighted-text">John</span></h4>
      </div>
      <div className="profile-details-role">
        <span className="primary-text">
          {""}
           <h1>
            {""}
            <Typical 
            loop={Infinity}
            steps={[
              "Ethusistic Dev 😎",
              1000,
              "React developer 💻",
              1000,
              "Junior React developer 💻",
              1000,
              "Web developer 💻",
              1000,
            ]}
            
            />
           </h1>
           <span className='profile-tag-line'>
            Knack of building applications with front end operations.
            </span>
        </span>
      </div>
      <div className='profile-options'>
        <button className='btn primary-btn'>
        {""}
        Hire Me{""}
        </button>
        <a href='John Resume.pdf' download="John Resume.pdf">
            <button className='btn highlighted-btn'>
                Get Resume
            </button>
        </a>
      </div>
    </div>
    </div>
  );
}

export default Profile;
