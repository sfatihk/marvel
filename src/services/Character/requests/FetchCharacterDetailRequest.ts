import api from "../../../config/API";

//utils
import generateAuthQueryString from "../../../utils/generateAuthQueryString";

//types
import { CharacterType } from "../../../types/CharacterType";

export type FetchCharacterDetailsPayloadType = {
  id: number;
};

export type FetchCharacterDetailsResponseType = {
  count: number;
  limit: number;
  offset: number;
  results: CharacterType[];
  total: number;
};

const FetchCharacterDetailRequest = async (
  payload: FetchCharacterDetailsPayloadType
): Promise<FetchCharacterDetailsResponseType> => {
  const id = payload.id;

  const authString = generateAuthQueryString();

  return api
    .get<ResponseType>(`/characters/${id}?${authString}`)
    .then((response) => {
      if (response && response.data) return response.data as ResponseType | any;
    })
    .then((response) => response.data)
    .catch((error) => new Error(error.getMessage()));
};

export default FetchCharacterDetailRequest;
