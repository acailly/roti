import {includes, isEmpty, range} from 'lodash'

export default value => 
    isEmpty(
        range(0, 5)
            .filter(level => {
                includes(window.y.share[level].toArray(), value)
            })
    )

