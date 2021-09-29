import { ThumnailType } from "./ThumnailType";
import { ComicType } from "./ComicType";

export type CharacterType = {
  id: number;
  name: string;
  thumbnail: ThumnailType;
  description: string;
  comics: ComicType;
};
