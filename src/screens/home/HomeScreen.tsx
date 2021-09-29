import CharacterList from "../../containers/characterList/CharacterList";
import WithLayout from "../../layout/Layout";

const HomeScreen = () =>
  WithLayout(
    <>
      <CharacterList />
    </>
  );

export default HomeScreen;
