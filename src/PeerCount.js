import React, {PureComponent} from 'react'
import FlatButton from 'material-ui/FlatButton';
import PeopleIcon from 'material-ui/svg-icons/social/people';

class PeerCount extends PureComponent {
  
  state = {peerCount: 1}

  componentDidMount(){
    const {ipfs} = this.props
    this.timer = setInterval(() => {
      ipfs.pubsub.peers("y-ipfs:rooms:acailly-roti", (err, peerIds) => {
        if (err) {
          throw err
        }
        this.setState({peerCount: peerIds.length + 1})
      })
    }, 5000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    this.timer = undefined
  }

  render(){
    return (
      <FlatButton 
        label={this.state.peerCount} 
        icon={<PeopleIcon />} 
        style={{cursor: 'pointer', color: 'white'}} 
        disableTouchRipple 
        hoverColor={'#00000000'} 
      />
    )
  }
}

export default PeerCount



