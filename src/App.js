import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThumbsIcon from 'material-ui/svg-icons/action/thumbs-up-down';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Choice from './Choice'
import MessageInput from './MessageInput'
import Messages from './Messages'

const styles = {
  appBody: {
    display: 'flex',
    flexDirection: 'column'
  },
  choices: {
    display: 'flex',
    flexDirection: 'column'
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '5px'
  }
}


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            style={{backgroundColor: '#aaaaaa'}}
            iconElementLeft={<IconButton><ThumbsIcon /></IconButton>}
            title="ROTI P2P"
          />
          <div style={styles.appBody}>
            <div style={styles.choices}>
              <Choice level={4} />
              <Choice level={3} />
              <Choice level={2} />
              <Choice level={1} />
              <Choice level={0} />
            </div>
            <div style={styles.messages}>
              <MessageInput />
              <Messages />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
