import renderer from "react-test-renderer";
import { ExtendedComicBookType } from "../../types/ComicBookType";

import Comic from "./Comic";

describe("Comic components", () => {
  const initialState: ExtendedComicBookType = {
    id: 123,
    title: "Comic Book",
    dates: [{ type: "onsaleDate", date: "2020-03-18T00:00:00-0400" }],
    pageCount: 123,
    prices: [{ type: "printPrice", price: "321" }],
    thumbnail: { extension: "png", path: "xyz" },
    urls: [{ type: "detail", url: "https://google.com" }],
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Comic {...initialState} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
