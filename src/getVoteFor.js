import { includes, head, range } from "lodash";

import store from "./store";

export default identity =>
  head(
    range(0, 5).filter(level => {
      return includes(store.getState()[level], identity);
    })
  );
