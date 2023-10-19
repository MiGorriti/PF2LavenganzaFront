import React, { useEffect } from "react";
import "./About.css";
import CardsAbout from "./CardsAbout";

const teamMembers = [
  {
    id: 1,
    name: "Miguel Gorriti",
    image: "https://avatars.githubusercontent.com/u/128431530?v=4",
    github: "https://github.com/MiGorriti",
    linkedin: "https://www.linkedin.com/in/miguel-gorriti-555393205/",
    description: "FULLSTACK DEVELOPER",
  },
  {
    id: 2,
    name: "Fabian Salcedo",
    image: "https://avatars.githubusercontent.com/u/117929534?v=4",
    github: "https://github.com/Fabian2023",
    linkedin: "https://github.com/Fabian2023",
    description: "FULLSTACK DEVELOPER",
  },
  {
    id: 3,
    name: "Santiago Ramirez",
    image: "https://avatars.githubusercontent.com/u/128662221?v=4",
    github: "https://github.com/SantiagoRC31",
    linkedin: "https://www.linkedin.com/in/santiago-ramirez-49b3b7271/",
    description: "FULLSTACK DEVELOPER",
  },
  {
    id: 4,
    name: "Lorenzo Santos",
    image: "https://avatars.githubusercontent.com/u/119063320?v=4",
    github: "https://github.com/AbareKiller100",
    linkedin: "https://www.linkedin.com/in/lorenzo-santos-34a109267/",
    description: "FULLSTACK DEVELOPER",
  },
  {
    id: 5,
    name: "Omar Sampayo",
    github: "https://github.com/Omarx32",
    linkedin: "https://www.linkedin.com/in/omarx32/",
    image: "https://avatars.githubusercontent.com/u/132229759?v=4",
    description: "FULLSTACK DEVELOPER",
  },
  {
    id: 6,
    name: "Giomar Mesa",
    image:
      "https://media.licdn.com/dms/image/D4E03AQH-m9ssNBpT7A/profile-displayphoto-shrink_400_400/0/1682653300306?e=1702512000&v=beta&t=Ir2ncCq1qZKfXnf1-EQ6GG202Xthuznc_LeVnaloBh8",
    github: "https://github.com/Giomy8",
    linkedin:
      "https://www.linkedin.com/in/giomar-andrea-mesa-molina-a595621bb/",
    description: "FULLSTACK DEVELOPER",
  },
  {
    id: 7,
    name: "Anthoaned Zavala",
    image: "https://avatars.githubusercontent.com/u/94303392?v=4",
    github: "https://github.com/tyffcode",
    linkedin: "https://www.linkedin.com/in/anthozavala/",
    description: "FULLSTACK DEVELOPER",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio cuando se carga el componente
  }, []);

  return (
    <div>
      <h1 className="aboutTeam">TEAM MEMBERS</h1>
      <div>
        <CardsAbout members={teamMembers} />
      </div>
    </div>
  );
};

export default About;
