import React, { useState } from "react";
import { ExtendedComicBookType } from "../../types/ComicBookType";

//styles
import "./Comic.scss";
const Comic = ({
  id,
  title,
  pageCount,
  dates,
  prices,
  thumbnail,
  urls,
}: ExtendedComicBookType) => {
  const [publishedDate] = useState(
    dates.find((date) => date.type === "onsaleDate")?.date
  );
  return (
    <a
      className="comic"
      href={urls.find((url) => url.type === "detail")?.url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={thumbnail.path + "." + thumbnail.extension}
        alt=""
        className="comic__thumbnail"
      />
      <div className="comic__content">
        <div className="comic__title">{title}</div>
        <div className="comic__pageCount">Page count : {pageCount || "-"}</div>
        <div className="comic__publishDate">
          Published :{" "}
          {publishedDate ? new Date(publishedDate).toLocaleDateString() : "-"}
        </div>
        <div className="comic__price">
          Price :{" "}
          {"$" + prices.find((price) => price.type === "printPrice")?.price ||
            "-"}
        </div>
      </div>
    </a>
  );
};

export default Comic;
