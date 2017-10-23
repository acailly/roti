import Y from 'yjs'
import yMemory from 'y-memory'
import yWebrtc from 'y-webrtc'
import yArray from 'y-array'
import yMap from 'y-map'

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
