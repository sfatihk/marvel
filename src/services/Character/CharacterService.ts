import FetchCharactersRequest, {
  FetchCharactersPayloadType,
} from "./requests/FetchCharactersRequest";

import fetchCharacterDetailsRequest, {
  FetchCharacterDetailsPayloadType,
} from "./requests/FetchCharacterDetailRequest";

const fetchCharacters = (props: FetchCharactersPayloadType) =>
  FetchCharactersRequest(props);

const fetchCharacterDetails = (props: FetchCharacterDetailsPayloadType) =>
  fetchCharacterDetailsRequest(props);

export { fetchCharacters, fetchCharacterDetails };
