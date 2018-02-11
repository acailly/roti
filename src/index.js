import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import IPFS from "ipfs";
import Y from "yjs";
import yMemory from "y-memory";
import yIpfs from "y-ipfs-connector";
import yArray from "y-array";
import yMap from "y-map";

yMemory(Y);
yIpfs(Y);
yArray(Y);
yMap(Y);

function repo() {
  return "ipfs/acailly-yjs-demo/" + Math.random();
}

const ipfs = new IPFS({
  repo: repo(),
  EXPERIMENTAL: {
    pubsub: true,
    dht: true
  },
  config: {
    Addresses: {
      Swarm: [
        // '/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star' //MORE "BROWSERISH", BUT LESS STABLE
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star' //MORE STABLE, PREFFERRED FOR LIVE DEMO
      ]
    }
  }
});

ipfs.on("error", err => {
  console.error(err);
});

ipfs.on("ready", () =>
  ipfs.id((err, info) => {
    if (err) {
      throw err;
    }

    console.log("IPFS node ready with address " + info.id);

    ipfs.id((err, peerId) => {
      if (err) {
        throw err;
      }

      console.log("Peer ID is:", peerId);

      window.peerId = peerId;

      Y({
        db: {
          name: "memory"
        },
        connector: {
          name: "ipfs",
          room: "acailly-roti",
          ipfs: ipfs
        },
        share: {
          0: "Array",
          1: "Array",
          2: "Array",
          3: "Array",
          4: "Array",
          messages: "Array"
        }
      }).then(function(y) {
        window.y = y;
        console.log("Yjs instance ready!");

        ReactDOM.render(<App />, document.getElementById("root"));
        registerServiceWorker();
      });
    });
  })
);
