import React, { useEffect } from "react";
import { Col, Row } from "antd";

//store
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCharacterList,
  getCharacters,
} from "../../store/features/characterSlice";
import Character from "../../components/Character";

//styles
import "./CharacterList.scss";

const CharacterList = () => {
  const dispatch = useAppDispatch();
  const { status, results, count } = useAppSelector(getCharacterList);

  useEffect(() => {
    if (count === 0) {
      dispatch(getCharacters(0));
    }
  }, [count, dispatch]);

  return (
    <div className="characterList">
      {results &&
        results.map((character) => (
          <Character key={character.id} {...character} />
        ))}
      {status !== "loading" && (
        <Col xs={{ span: 23, offset: 1 }} lg={{ span: 22, offset: 2 }}>
          <button onClick={() => dispatch(getCharacters(count))}>
            Load More
          </button>
        </Col>
      )}
    </div>
  );
};

export default CharacterList;
