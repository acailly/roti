import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Y from 'yjs/dist/y'
import yMemory from 'y-memory/dist/y-memory'
import yWebrtc from 'y-webrtc/dist/y-webrtc'
import yArray from 'y-array/dist/y-array'
import yMap from 'y-map/dist/y-map'

yMemory(Y)
yWebrtc(Y)
yArray(Y)
yMap(Y)

Y({
  db: {
    name: 'memory' 
  },
  connector: {
    name: 'webrtc',
    room: 'acailly-roti'
  },
  share: { 
    votes: 'Array'
  }
}).then(function (y) {
  window.y = y
  console.log('Yjs instance ready!')
  window.y.share.votes.observe(function(event){
    console.dir(event)
  })

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
})
