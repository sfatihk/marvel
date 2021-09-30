import React, { useEffect } from "react";
import { Col } from "antd";

//store
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCharacterList,
  getCharacters,
} from "../../store/features/characterSlice";
import Character from "../../components/Character";

//styles
import "./CharacterList.scss";
import InfiniteScroll from "react-infinite-scroll-component";

const CharacterList = () => {
  const dispatch = useAppDispatch();
  const { status, results, count } = useAppSelector(getCharacterList);

  useEffect(() => {
    if (count === 0) {
      dispatch(getCharacters(0));
    }
  }, [count, dispatch]);

  return (
    <InfiniteScroll
      className="characterList"
      dataLength={count}
      next={() => dispatch(getCharacters(count))}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
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
    </InfiniteScroll>
  );
};

export default CharacterList;
