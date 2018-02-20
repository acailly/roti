import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {isEmpty} from 'lodash'

import addMessage from './addMessage'

class MessageInput extends PureComponent {

    state = {message: ''}

    handleChange = (event) => {
        this.setState({message: event.target.value});
    }

    handleSubmit = (event) => {
        addMessage(this.state.message)
        this.setState({message: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{alignSelf: 'center', marginBottom: '10px'}}>
                <TextField
                    hintText="Quelque chose à ajouter ?"
                    onChange={this.handleChange}
                    value={this.state.message}
                    multiLine
                    style={{marginRight: '10px', width: '50vw'}}
                />
                <RaisedButton 
                    disabled={isEmpty(this.state.message)} 
                    type='submit' 
                    label='Envoyer' 
                />
            </form>
        )
    }
}

export default MessageInput
