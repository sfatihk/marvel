import api from "../../../config/API";

//utils
import generateAuthQueryString from "../../../utils/generateAuthQueryString";

//types
import { ExtendedComicBookType } from "../../../types/ComicBookType";

export type FetchCharacterComicsPayloadType = {
  id: number;
};

export type FetchCharacterComicsResponseType = {
  count: number;
  limit: number;
  offset: number;
  results: ExtendedComicBookType[];
  total: number;
};

const FetchCharacterComicsRequest = async (
  payload: FetchCharacterComicsPayloadType
): Promise<FetchCharacterComicsResponseType> => {
  const id = payload.id;
  const limit = 10;
  const authString = generateAuthQueryString();

  const queryString = `?limit=${limit}&${authString}`;
  return api
    .get<ResponseType>(`/characters/${id}/comics${queryString}`)
    .then((response) => {
      if (response && response.data) return response.data as ResponseType | any;
    })
    .then((response) => response.data)
    .catch((error) => new Error(error.getMessage()));
};

export default FetchCharacterComicsRequest;
