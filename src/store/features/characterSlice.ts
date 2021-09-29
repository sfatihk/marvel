import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

//services
import * as CharacterService from "../../services/Character/CharacterService";

//types
import { CharacterType } from "../../types/CharacterType";

export type CharacterState = {
  count: number;
  results: CharacterType[];
  total: number;
  status: "idle" | "loading" | "failed";
};

const initialState: CharacterState = {
  count: 0,
  results: [],
  total: 0,
  status: "idle",
};

export const getCharacters = createAsyncThunk(
  "counter/fetchCharacters",
  async (offset: number) => {
    const response = await CharacterService.fetchCharacters({ offset });

    return response;
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = "idle";
        state.count += action.payload.count;
        state.results = [...state.results, ...action.payload.results];
        state.total = action.payload.total;
      });
  },
});

export const getCharacterList = (state: RootState) => state.character;

export default characterSlice.reducer;
