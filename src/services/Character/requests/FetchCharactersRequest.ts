import api from "../../../config/API";

//utils
import generateAuthQueryString from "../../../utils/generateAuthQueryString";

//types
import { CharacterType } from "../../../types/CharacterType";

export type FetchCharactersPayloadType = {
  offset: number;
};

export type FetchCharactersResponseType = {
  count: number;
  limit: number;
  offset: number;
  results: CharacterType[];
  total: number;
};

const FetchCharactersRequest = async (
  payload: FetchCharactersPayloadType
): Promise<FetchCharactersResponseType> => {
  const limit = 30;
  const offset = payload.offset;

  const authString = generateAuthQueryString();
  const queryString = `?limit=${limit}&offset=${offset}&${authString}`;

  return api
    .get<ResponseType>(`/characters${queryString}`)
    .then((response) => {
      if (response && response.data) return response.data as ResponseType | any;
    })
    .then((response) => response.data)
    .catch((error) => new Error(error.getMessage()));
};

export default FetchCharactersRequest;
