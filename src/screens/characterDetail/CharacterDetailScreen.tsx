import React, { useEffect, useState } from "react";
import WithLayout from "../../layout/Layout";
import * as CharacterService from "../../services/Character/CharacterService";
import { CharacterType } from "../../types/CharacterType";
import { ExtendedComicBookType } from "../../types/ComicBookType";

import ComicList from "../../containers/comicList/ComicList";

import "./CharacterDetailScreen.scss";
type PropType = {
  id: number;
};
type RouterParam = {
  params: PropType;
};
const CharacterDetailScreen = ({ match }: { match: RouterParam }) => {
  const [character, setCharacter] = useState<CharacterType>();
  const [comics, setComics] = useState<ExtendedComicBookType[]>();

  useEffect(() => {
    CharacterService.fetchCharacterDetails({ id: match.params.id }).then((r) =>
      setCharacter(r.results[0])
    );

    CharacterService.fetchCharacterComics({ id: match.params.id }).then((r) =>
      setComics(r.results)
    );
  }, [match.params.id]);

  useEffect(() => {
    const brandmark = "Marvel Box";
    document.title = character?.name + " | " + brandmark || brandmark;
  }, [character]);

  return WithLayout(
    <div className="characterDetail">
      <div className="characterDetail__banner">
        <img
          className="characterDetail__cover"
          src={character?.thumbnail.path + "." + character?.thumbnail.extension}
          alt=""
        />
        <div className="characterDetail__name">{character?.name}</div>
      </div>
      <div className="characterDetail__content">
        <h4>Description : </h4>
        <h4>{character?.description || "-"}</h4>
        <br />
        <h4>Comics : {comics?.length === 0 && "-"}</h4>
        {comics && <ComicList comics={comics} />}
      </div>
    </div>
  );
};

export default CharacterDetailScreen;
