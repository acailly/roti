import {includes, head, range} from 'lodash'

export default identity => 
    head(
        range(0, 5)
            .filter(level => {
                return includes(window.y.share[level].toArray(), identity)
            })
    )