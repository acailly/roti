import MPL from "mpl";

export const INIT = "INIT";

export const init = (oldState, action) => {
  return MPL.Automerge.change(oldState, "initialization", newState => {
    newState.messages = [];
    newState.votes = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: []
    };
  });
};
