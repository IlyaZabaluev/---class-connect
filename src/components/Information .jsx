import { InformationLayout } from './InformationLayout';
import { useSelector, useDispatch } from '../redux-manager';

export const Information = () => {
	const { isDraw, isGameEnded, currentPlayer, getField } = useSelector();
	const dispatch = useDispatch();

	let inf = '';
	const res = getField.includes('');
	console.log(res, isDraw);

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
};
