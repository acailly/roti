import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import {
  orange500,
  amber500,
  yellow500,
  lime500,
  lightGreen500,
  fullWhite,
  indigoA100
} from "material-ui/styles/colors";

import identity from "./identity";
import store from "./store";
import { ADD_VOTE } from "./addVoteFor";
import { REMOVE_VOTE } from "./removeVoteFor";
import getVoteCountForLevel from "./getVoteCountForLevel";
import getVoteFor from "./getVoteFor";

const labels = [
  "1 - Inutile",
  "2 - Bof",
  "3 - Sans plus",
  "4 - Bon",
  "5 - Excellent"
];

const colors = [orange500, amber500, yellow500, lime500, lightGreen500];

class Choice extends Component {
  state = { voteCount: 0 };

  addVote = () => {
    const { level } = this.props;
    this.dispatch({ type: REMOVE_VOTE, identity });
    this.dispatch({ type: ADD_VOTE, identity, level });
  };

  componentDidMount() {
    const { level } = this.props;

    store.subscribe(() => {
      this.setState({ voteCount: getVoteCountForLevel(level) });
    });
  }

  render() {
    const { level } = this.props;
    const currentVote = getVoteFor(identity);

    const avatar = (
      <Avatar size={25} backgroundColor={fullWhite}>
        {this.state.voteCount}
      </Avatar>
    );

    if (currentVote === level) {
      return (
        <div style={{ margin: "5px" }}>
          <RaisedButton
            onClick={this.addVote}
            labelPosition="before"
            backgroundColor={indigoA100}
            label={labels[level]}
            icon={avatar}
            fullWidth
          />
        </div>
      );
    } else {
      return (
        <div style={{ margin: "5px" }}>
          <RaisedButton
            onClick={this.addVote}
            labelPosition="before"
            backgroundColor={colors[level]}
            label={labels[level]}
            icon={avatar}
            fullWidth
          />
        </div>
      );
    }
  }
}

export default Choice;
