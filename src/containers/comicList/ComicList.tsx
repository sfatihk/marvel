import Comic from "../../components/comic/Comic";
import { ExtendedComicBookType } from "../../types/ComicBookType";

import "./ComicList.scss";
const ComicList = ({ comics }: { comics: ExtendedComicBookType[] }) => (
  <div className="comicList">
    {comics?.map((comic, i) => (
      <Comic key={i} {...comic} />
    ))}
  </div>
);

export default ComicList;
