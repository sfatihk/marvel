import React, { useEffect } from "react";

import CharacterList from "../../containers/characterList/CharacterList";
import WithLayout from "../../layout/Layout";

const HomeScreen = () => {
  useEffect(() => {
    const brandmark = "Marvel Box";
    document.title = brandmark;
  }, []);
  return WithLayout(
    <>
      <CharacterList />
    </>
  );
};

export default HomeScreen;
