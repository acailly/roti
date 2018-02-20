import React, {PureComponent} from 'react'
import {Card, CardText} from 'material-ui/Card';

import getMessages from './getMessages'

class Messages extends PureComponent {

    state = {messages: []}

    componentDidMount(){
        window.y.share.messages.observe(event => {
            this.setState({messages: getMessages()})
        })
    }

    render() {
        const messageItems = this.state.messages.map((message, messageIndex) => ( 
            <Card 
                key={messageIndex} 
                style={{marginBottom: '5px', width: '80vw'}}
            >
                <CardText><i>{message}</i></CardText>
            </Card>
        ))
        return (
            <div style={{flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {messageItems}
            </div>
        )
    }

}

export default Messages

