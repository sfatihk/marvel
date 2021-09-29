import { Col } from "antd";
import { CharacterType } from "../types/CharacterType";
import { useHistory } from "react-router-dom";

const Character = ({
  id,
  name,
  description,
  thumbnail,
  comics,
}: CharacterType) => {
  const history = useHistory();
  return (
    <Col
      xs={{ span: 6, offset: 1 }}
      lg={{ span: 4, offset: 2 }}
      onClick={() => history.push(`/characters/${id}`)}
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <img
        src={thumbnail.path + "." + thumbnail.extension}
        alt=""
        width="100"
        height="100"
      />
      {name}
    </Col>
  );
};

export default Character;
