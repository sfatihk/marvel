import React, { useEffect, useState } from "react";
import WithLayout from "../../layout/Layout";
import * as CharacterService from "../../services/Character/CharacterService";
import { CharacterType } from "../../types/CharacterType";

type PropType = {
  id: number;
};
type RouterParam = {
  params: PropType;
};
const CharacterDetailScreen = ({ match }: { match: RouterParam }) => {
  const [character, setCharacter] = useState<CharacterType>();
  useEffect(() => {
    CharacterService.fetchCharacterDetails({ id: match.params.id }).then((r) =>
      setCharacter(r.results[0])
    );
  }, [match.params.id]);

  return WithLayout(
    <>
      <h1>{character?.name}</h1>
      <h4>{character?.description}</h4>
      <img
        src={character?.thumbnail.path + "." + character?.thumbnail.extension}
        alt=""
        width="100"
        height="100"
      />

      <ol>
        {character?.comics.items.map((comicbook, i) => (
          <li key={i}>{comicbook.name}</li>
        ))}
      </ol>
    </>
  );
};

export default CharacterDetailScreen;
