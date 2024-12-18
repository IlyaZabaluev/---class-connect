import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import {
	selectGetField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors/selectors';

export class InformationContainer extends Component {
	render() {
		const { isGameEnded, getField, currentPlayer, isDraw, dispatch } = this.props;
		let inf = '';
		const res = getField.includes('');

		if (isGameEnded === true && res === false) {
			dispatch({ type: 'SET_IS_DRAW', payload: true });
		}

		if (isDraw === false && isGameEnded === false) {
			inf = `Ходит: ${currentPlayer}`;
		} else if (isDraw === true) {
			inf = 'Ничья';
		} else if (isDraw === false && isGameEnded === true) {
			inf = `Победа: ${currentPlayer}`;
		} else {
			inf = '';
		}

		return <InformationLayout inf={inf} />;
	}
}

const mapStateToProps = (state) => ({
	getField: selectGetField(state),
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
	isDraw: selectIsDraw(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);
