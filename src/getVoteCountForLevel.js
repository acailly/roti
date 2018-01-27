import store from "./store";

export default level => store.getState().votes[level].length;
