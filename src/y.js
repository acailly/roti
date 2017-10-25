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
    map: 'Map',
    array: 'Array'
  }
}).then(function (y) {
  window.y = y
  console.log('Yjs instance ready!')
  y.share.map // is an Y.Map instance
  y.share.array // is an Y.Array instance
})
