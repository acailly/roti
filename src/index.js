import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
import { INIT } from "./init";

store.dispatch({ type: INIT });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
