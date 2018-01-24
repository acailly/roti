import MPL from "mpl";

export const INIT = "INIT";

export const init = (state, action) => {
  return MPL.Automerge.change(oldState, "initialization", newState => {
    newState.messages = [];
    newState[0] = [];
    newState[1] = [];
    newState[2] = [];
    newState[3] = [];
    newState[4] = [];
  });
};
