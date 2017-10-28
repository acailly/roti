import React, {Component} from 'react'

import getMessages from './getMessages'

class Messages extends Component {

    state = {messages: []}

    componentDidMount(){
        window.y.share.messages.observe(event => {
            this.setState({messages: getMessages()})
        })
    }

    render() {
        const messageItems = this.state.messages.map((message, messageIndex) => 
            <li key={messageIndex}>{message}</li>
        )
        return (
            <ul>
                {messageItems}
            </ul>
        )
    }

}

export default Messages

