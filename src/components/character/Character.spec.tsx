import renderer from "react-test-renderer";
import { CharacterType } from "../../types/CharacterType";
import Character from "./Character";

describe("Character components", () => {
  const initialState: CharacterType = {
    id: 1,
    name: "test",
    thumbnail: { extension: "png", path: "xyz" },
    comics: [],
    description: "test desctiption",
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Character {...initialState} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
