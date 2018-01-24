import store from "./store";

export default level => store.getState()[level].length;
