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

  //const authString = generateAuthQueryString();
  const authString =
    "ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f"; //todoo must delete

  return api
    .get<ResponseType>(`/characters/${id}?${authString}`)
    .then((response) => {
      if (response && response.data) return response.data as ResponseType | any;
    })
    .then((response) => response.data)
    .catch((error) => new Error(error.getMessage()));
};

export default FetchCharacterDetailRequest;
