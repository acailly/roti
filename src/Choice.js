import React, {Component} from 'react'

class Choice extends Component {
    
    state = {votes: []}

    addVote = () => {
        window.y.share.votes.push(['one vote'])
    }

    componentDidMount(){
        window.y.share.votes.observe(event => {
            this.setState({votes: window.y.share.votes.toArray()})
        })
    }

    render(){
        return (
            <div>
                <button type='button' onClick={this.addVote}>Click me</button>
                <span>{this.state.votes.length}</span>
            </div>
        )
    }
}

export default Choice