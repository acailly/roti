import { range } from "lodash";

import MPL from "mpl";

export const REMOVE_VOTE = "REMOVE_VOTE";

export const removeVote = (state, { identity }) => {
  return MPL.Automerge.change(oldState, "remove vote", newState => {
    range(0, 5).forEach(level => {
      const voteIndex = newState[level].indexOf(identity);
      if (voteIndex > -1) {
        newState[level].delete(voteIndex);
      }
    });
  });
};
