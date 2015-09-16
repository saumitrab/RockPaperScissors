/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var RockPaperScissors = React.createClass({
	
  getInitialState() {
    return {
      message: null
    }
  },
  
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dare to play!
        </Text>
        <DisplayResults message={this.state.message} />
        <PlayButton text={"Rock"} onPress={this._onPress} />
        <PlayButton text={"Paper"} onPress={this._onPress} />
        <PlayButton text={"Scissors"} onPress={this._onPress} />
      </View>
    );
  },

  _onPress(value) {
    var AIChoiceNumber = Math.floor((Math.random() * 10) % 3);
    var AIChoiceString;
    var ROCK_STRING = "Rock";
    var PAPER_STRING = "Paper";
    var SCISSORS_STRING = "Scissors";

    switch (AIChoiceNumber) {
      case 0:
        AIChoiceString = ROCK_STRING;
        break;
      case 1:
        AIChoiceString = PAPER_STRING;
        break;
      case 2:
        AIChoiceString = SCISSORS_STRING;
        break;
    }
    var result;
    if ( value === AIChoiceString ) {
      result = 'I chose ' + AIChoiceString + '.\nIts a tie! :|';
    } else {
      if ( value === ROCK_STRING ) {
        if ( AIChoiceString === PAPER_STRING ) {
          result = 'I chose ' + AIChoiceString + '.\nYou lose! :D';
	} else {
          result = 'I chose ' + AIChoiceString + '.\nYou win! (╯°□°）╯︵ ┻━┻)';
	}
      } else if ( value === PAPER_STRING ) {
        if ( AIChoiceString === SCISSORS_STRING ) {
          result = 'I chose ' + AIChoiceString + '.\nYou lose! :D';
	} else {
          result = 'I chose ' + AIChoiceString + '.\nYou win! (╯°□°）╯︵ ┻━┻)';
	}
      } else {
         if ( AIChoiceString === ROCK_STRING ) {
          result = 'I chose ' + AIChoiceString + '.\nYou lose! :D';
	} else {
          result = 'I chose ' + AIChoiceString + '.\nYou win! (╯°□°）╯︵ ┻━┻)';
	}

      }
    }
    this.setState({
	    message: result
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 15,
  },
});

var PlayButton = React.createClass({
  render() {
    var style = {
      textAlign: 'center',
      color: '#ffffff',
      padding: 10,
      borderRadius: 5,
      margin: 10,
      width:80,
      backgroundColor: '#eeeeff'
    };

    var textStyle = {
      flex: 1,
      alignSelf: 'flex-end'
    }

    return (
      <TouchableHighlight onPress={this._onPress} style={style}>
      <Text>{this.props.text}</Text>
      </TouchableHighlight>);
    },

    _onPress() {
      this.props.onPress(this.props.text);
    }
});

var DisplayResults = React.createClass({
  render() {
    var styles = {
      backgroundColor: this.props.backgroundColor,
      flex: 1,
      display: 'flex',
      alignItems: 'stretch',
      width: 300,
      marginTop: 30
    }

    return (
      <View style={styles}>
      <Text>{this.props.message}</Text>
      </View>)
  }
});

AppRegistry.registerComponent('RockPaperScissors', () => RockPaperScissors);
