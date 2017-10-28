import React, {Component} from 'react'

import addMessage from './addMessage'

class MessageInput extends Component {

    state = {message: ''}

    handleChange = (event) => {
        this.setState({message: event.target.value});
    }

    handleSubmit = (event) => {
        addMessage(this.state.message)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.message} onChange={this.handleChange} ></input>
                <input type='submit' value='Send' />
            </form>
        )
    }
}

export default MessageInput
