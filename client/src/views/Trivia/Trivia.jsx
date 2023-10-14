import "./trivia.css";
import Button from "../../components/Button/Button";

const Trivia = () => {
  return (
    <div className="containertrivia">
      <div className="col">
        <div className="pregunta">
          <p className="text">
            ¿Cual de los siguientes roles se encarga de mantener vivo al equipo?
          </p>
        </div>
        <div className="opciones">
        <Button text="Support" />
        <Button text="Jungla" />
        <Button text="Top" />
        </div>
      </div>
    </div>
  );
};

export default Trivia;
