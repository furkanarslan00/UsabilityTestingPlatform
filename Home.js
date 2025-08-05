import React from 'react';
import './Home.css'; // CSS dosyasını içe aktar

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="about-section">
        <div className="box">
          <h2 className="title">Usability Testing Platform</h2>
          <p className="description">
            This platform is dedicated to promoting effective usability testing in software development.
            By providing a comprehensive set of tools and resources, we aim to enhance the user experience
            and improve the quality of software products.
          </p>
        </div>
        <div className="box">
          <p className="description">
            Usability testing is crucial in ensuring that software meets the needs and expectations of users.
            Through this platform, developers can access a variety of testing methods, collaborate with testers,
            and gain valuable insights to optimize their products.
          </p>
        </div>
        <div className="box">
          <p className="description">
            Join us in our mission to create user-friendly software that delights users and drives success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
