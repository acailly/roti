import MPL from "mpl";

export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (oldState, { message }) => {
  return MPL.Automerge.change(oldState, "add message", newState => {
    newState.messages.push([message]);
  });
};
