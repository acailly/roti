import {range} from 'lodash'

export default identity =>
    range(0, 5)
        .forEach(level => {
            const voteIndex = window.y.share[level].toArray().indexOf(identity)
            if(voteIndex > -1){
                window.y.share[level].delete(voteIndex)
            }
        })