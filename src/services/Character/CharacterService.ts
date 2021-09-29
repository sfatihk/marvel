import FetchCharactersRequest, {
  FetchCharactersPayloadType,
} from "./requests/FetchCharactersRequest";

const fetchCharacters = (props: FetchCharactersPayloadType) =>
  FetchCharactersRequest(props);

export { fetchCharacters };
