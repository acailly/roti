import {includes, head, range} from 'lodash'

export default value => 
    head(
        range(0, 5)
            .filter(level => {
                includes(window.y.share[level].toArray(), value)
            })
    )