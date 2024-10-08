export const ACTION_TYPE = {
	SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
	SET_IS_DRAW: 'SET_IS_DRAW',
	SET_GET_FIELD: 'SET_GET_FIELD',
	SET_IS_GAME_ENDED: 'SET_IS_GAME_ENDED',
	RESTART_GAME: 'RESTART_GAME',
};

export const setCurrentPlayer = (currentPlayer) => ({
	type: ACTION_TYPE.SET_CURRENT_PLAYER,
	payload: currentPlayer,
});

export const setIsDraw = (isDraw) => ({
	type: ACTION_TYPE.SET_IS_DRAW,
	payload: isDraw,
});

export const setGetField = (getField) => ({
	type: ACTION_TYPE.SET_GET_FIELD,
	payload: getField,
});

export const setIsGameEnded = (isGameEnded) => ({
	type: ACTION_TYPE.SET_IS_GAME_ENDED,
	payload: isGameEnded,
});

export const RESTART_GAME = {
	type: ACTION_TYPE.RESTART_GAME,
};
