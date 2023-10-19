import CardAbout from "./CardAbout";
import "./CardsAbout.css";

const CardsAbout = ({ members }) => {
  return (
    <div className="contenedorCards">
      {members.map((member) => (
        <CardAbout
          key={member.id}
          name={member.name}
          description={member.description}
          github={member.github}
          linkedin={member.linkedin}
          image={member.image}
        />
      ))}
    </div>
  );
};

export default CardsAbout;
