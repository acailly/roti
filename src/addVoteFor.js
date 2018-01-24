import MPL from "mpl";

export const ADD_VOTE = "ADD_VOTE";

export const addVote = (state, { identity, level }) => {
  return MPL.Automerge.change(oldState, "add vote", newState => {
    newState[level].push([identity]);
  });
};
