import { ThumnailType } from "./ThumnailType";

type UrlType = {
  type: "detail" | "purchase" | "reader" | "inAppLink";
  url: string;
};
type DateType = {
  type: "onsaleDate" | "focDate" | "unlimitedDate" | "digitalPurchaseDate";
  date: string;
};
type PriceType = {
  type: "printPrice" | "digitalPurchasePrice";
  price: number;
};
export type ComicBookType = {
  name: string;
};

export type ExtendedComicBookType = {
  id: number;
  title: string;
  pageCount: number;
  urls: UrlType[];
  dates: DateType[];
  prices: PriceType[];
  thumbnail: ThumnailType;
};
