import FetchCharactersRequest, {
  FetchCharactersPayloadType,
} from "./requests/FetchCharactersRequest";

import fetchCharacterDetailsRequest, {
  FetchCharacterDetailsPayloadType,
} from "./requests/FetchCharacterDetailRequest";

import FetchCharacterComicsRequest, {
  FetchCharacterComicsPayloadType,
} from "./requests/FetchCharacterComicsRequest";

const fetchCharacters = (props: FetchCharactersPayloadType) =>
  FetchCharactersRequest(props);

const fetchCharacterDetails = (props: FetchCharacterDetailsPayloadType) =>
  fetchCharacterDetailsRequest(props);

const fetchCharacterComics = (props: FetchCharacterComicsPayloadType) =>
  FetchCharacterComicsRequest(props);

export { fetchCharacters, fetchCharacterDetails, fetchCharacterComics };
