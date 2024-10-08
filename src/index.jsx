import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './Game';
import { ReduxRender } from './redux-manager';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ReduxRender store={store}>
		<Game />
	</ReduxRender>,
);
