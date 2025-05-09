import React from 'react';
import './Styles.Css'; // Import external CSS
import profileImg from '../assets/Renke_at_Oia.jpg'; // Adjust path if needed

const Banner = () => {
  return (
    <section className="banner">
      <img src={profileImg} alt="Profile" className="banner-image" />
      <h1 className="banner-name">Renke Cui</h1>
      <p className="banner-intro">
        I'm a Computer Engineering student passionate about full-stack development,
        data-driven design, and building intuitive user experiences.
      </p>
    </section>
  );
};

export default Banner;



{/* <h1>Renke Cui</h1>
<h2>Software Developer</h2>
<p className="description">
  I'm a student at Northeastern university majoring in Computer
  Engineering and Computer Science with a minor in Business
  administration. I enjoy the challenge of always learning
  something new. */}