import MPL from "mpl";
import { INIT, init } from "./init";
import { ADD_MESSAGE, addMessage } from "./addMessage";
import { ADD_VOTE, addVote } from "./addVoteFor";
import { REMOVE_VOTE, removeVote } from "./removeVoteFor";

const store = new MPL.Store((state, action) => {
  console.log("ACTION", action.type);
  switch (action.type) {
    case INIT:
      return init(state, action);
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
