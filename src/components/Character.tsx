import { CharacterType } from "../types/CharacterType";
import { useHistory } from "react-router-dom";

//styles
import "./Character.scss";
const Character = ({
  id,
  name,
  description,
  thumbnail,
  comics,
}: CharacterType) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/characters/${id}`)}
      className="character"
    >
      <img
        src={thumbnail.path + "." + thumbnail.extension}
        alt=""
        className="character__thumbnail"
      />
      <div className="character__name">{name}</div>
    </div>
  );
};

export default Character;
