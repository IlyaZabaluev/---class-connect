import { Component } from 'react';
import { connect } from 'react-redux';
import { GameLayout } from './GameLayout';

export class GameContainer extends Component {
	render() {
		console.log(this.props.restartGame);
		return <GameLayout restartGame={this.props.restartGame} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	restartGame: () => dispatch({ type: 'RESTART_GAME' }),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
