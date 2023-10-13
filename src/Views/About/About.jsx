import React from "react";
import "../About/About.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const programmers = [
    {
      name: "Miguel Gorriti",
      image: "https://avatars.githubusercontent.com/u/128431530?v=4",
      socialMedia: {
        github: "https://github.com/MiGorriti",
        linkedin: "https://www.linkedin.com/in/miguel-gorriti-555393205/",
      },
    },
    {
      name: "Fabian Salcedo",
      image: "https://avatars.githubusercontent.com/u/117929534?v=4",
      socialMedia: {
        github: "https://github.com/Fabian2023",
        linkedin: "LINK_LINKEDIN_2",
      },
    },
    {
      name: "Santiago Ramirez",
      image: "https://avatars.githubusercontent.com/u/128662221?v=4",
      socialMedia: {
        github: "https://github.com/SantiagoRC31",
        linkedin: "LINK_LINKEDIN_3",
      },
    },
    {
      name: "Lorenzo Santos",
      image: "https://avatars.githubusercontent.com/u/119063320?v=4",
      socialMedia: {
        github: "https://github.com/AbareKiller100",
        linkedin: "https://www.linkedin.com/in/lorenzo-santos-34a109267/",
      },
    },
    {
      name: "Omar Sampayo",
      image: "https://avatars.githubusercontent.com/u/132229759?v=4",
      socialMedia: {
        github: "https://github.com/Omarx32",
        linkedin: "https://www.linkedin.com/in/omarx32/",
      },
    },
    {
      name: "Giomar Mesa",
      image:
        "https://media.licdn.com/dms/image/D4E03AQH-m9ssNBpT7A/profile-displayphoto-shrink_400_400/0/1682653300306?e=1702512000&v=beta&t=Ir2ncCq1qZKfXnf1-EQ6GG202Xthuznc_LeVnaloBh8",
      socialMedia: {
        github: "https://github.com/Giomy8",
        linkedin:
          "https://www.linkedin.com/in/giomar-andrea-mesa-molina-a595621bb/",
      },
    },
    {
      name: "",
      image: "",
      socialMedia: {
        github: "https://github.com/Mateoch14",
        linkedin: "https://www.linkedin.com/in/mateo-chavez/",
      },
    },
  ];

  return (
    <div>
      <h2 className="header-sec">Desarrolladores</h2>
      <div className="programmers-list">
        {programmers.map((programmer, index) => (
          <div key={index} className="programmer-card">
            <img
              className="fotito"
              src={programmer.image}
              alt={programmer.name}
            />
            <h2>{programmer.name}</h2>
            <div className="social-media-links">
              <Link to={programmer.socialMedia.github} target="_blank">
                <FaGithub />
              </Link>
              <Link to={programmer.socialMedia.linkedin} target="_blank">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/home" className="Boton">
        Home
      </Link>
    </div>
  );
};

export default About;
