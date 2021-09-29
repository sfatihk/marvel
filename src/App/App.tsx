import React, { useEffect } from "react";
import {
  getCharacterList,
  getCharacters,
} from "../store/features/characterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { status, results, count } = useAppSelector(getCharacterList);

  useEffect(() => {
    dispatch(getCharacters(0));
  }, [dispatch]);
  return (
    <div className="App">
      <ol>{results && results.map((c) => <li key={c.id}>{c.name}</li>)}</ol>

      <p>total : {count} </p>
      {status === "loading" && <h2>LOADING</h2>}
      {status !== "loading" && (
        <button onClick={() => dispatch(getCharacters(count))}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
