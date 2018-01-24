import MPL from "mpl";
import { ADD_MESSAGE, addMessage } from "./addMessage";
import { ADD_VOTE, addVote } from "./addVoteFor";
import { REMOVE_VOTE, removeVote } from "./removeVoteFor";

const store = new MPL.Store((state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return addMessage(state, action);
    case ADD_VOTE:
      return addVote(state, action);
    case REMOVE_VOTE:
      return removeVote(state, action);
    default:
      return state;
  }
});

export default store;
