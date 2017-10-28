import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import IPFS from 'ipfs'
import Y from 'yjs/dist/y'
import yMemory from 'y-memory/dist/y-memory'
import yIpfs from 'y-ipfs-connector'
import yArray from 'y-array/dist/y-array'
import yMap from 'y-map/dist/y-map'

yMemory(Y)
yIpfs(Y)
yArray(Y)
yMap(Y)


function repo () {
return 'ipfs/acailly-yjs-demo/' + Math.random()
}

const ipfs = new IPFS({
    repo: repo(),
    EXPERIMENTAL: {
        pubsub: true
    }
})

ipfs.on('error', (err) => {
	console.error(err)
}) 

ipfs.on('ready', () => ipfs.id((err, info) => {
    if (err) { throw err }

    console.log('IPFS node ready with address ' + info.id)

    Y({
        db: {
            name: 'memory' 
        },
        connector: {
            name: 'ipfs',
            room: 'acailly-roti',
            ipfs: ipfs
        },
        share: { 
            0: 'Array',
            1: 'Array',
            2: 'Array',
            3: 'Array',
            4: 'Array',
            messages: 'Array'
        }
    }).then(function (y) {
        window.y = y
        console.log('Yjs instance ready!')
        
        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
    })
}))


