import characterReducer, { CharacterState } from "./characterSlice";

describe("character reducer", () => {
  const initialState: CharacterState = {
    count: 0,
    results: [],
    total: 0,
    status: "idle",
  };

  it("should handle initial state", () => {
    expect(characterReducer(undefined, {})).toEqual(initialState);
  });
});
