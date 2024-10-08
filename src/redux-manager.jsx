import { useEffect, useState } from 'react';

const reduxManager = {
	store: null,
};

export const ReduxRender = ({ children, store }) => {
	reduxManager.store = store;

	return children;
};

export const useSelector = () => {
	const [state, setState] = useState(reduxManager.store.getState());

	useEffect(() => {
		const unsubscribe = reduxManager.store.subscribe(() => {
			setState(reduxManager.store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return state;
};

export const useDispatch = () => {
	return reduxManager.store.dispatch;
};
