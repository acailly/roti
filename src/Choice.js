import React, {Component} from 'react'
import identity from './identity'
import addVoteFor from './addVoteFor'
import removeVoteFor from './removeVoteFor'
import getVoteCountForLevel from './getVoteCountForLevel'

const labels = [
    '1 - Inutile',
    '2 - Bof',
    '3 - Sans plus',
    '4 - Bon',
    '5 - Excellent'
]

class Choice extends Component {
    
    state = {voteCount: 0}

    addVote = () => {
        const {level} = this.props
        removeVoteFor(identity)
        addVoteFor(identity, level)
    }

    componentDidMount(){
        const {level} = this.props
        window.y.share[level].observe(event => {
            this.setState({voteCount: getVoteCountForLevel(level)})
        })
    }

    render(){
        const {level} = this.props
        const label = labels[level]

        return (
            <div>
                <button type='button' onClick={this.addVote}>{label}</button>
                <span>{this.state.voteCount}</span>
            </div>
        )
    }
}

export default Choice