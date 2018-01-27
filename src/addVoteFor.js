import MPL from "mpl";

export const ADD_VOTE = "ADD_VOTE";

export const addVote = (oldState, { identity, level }) => {
  return MPL.Automerge.change(oldState, "add vote", newState => {
    newState.votes[level].push(identity);
  });
};
