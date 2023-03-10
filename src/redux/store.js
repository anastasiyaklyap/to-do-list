import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

export const getAllColumns = ({ columns }) => {
	return columns;
};

export const getFilteredCards = ({ cards, searchQuery }, columnId) =>
	cards.filter(
		(card) => card.columnId === columnId && strContains(card.title, searchQuery)
	);

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const updateSearchQuery = (payload) => ({
	type: 'UPDATE_SEARCHQUERY',
	payload,
});

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return {
				...state,
				columns: [...state.columns, { ...action.payload, id: shortid() }],
			};
		case 'ADD_CARD':
			return {
				...state,
				cards: [...state.cards, { ...action.payload, id: shortid() }],
			};
		case 'UPDATE_SEARCHQUERY':
			return {
				...state,
				searchQuery: action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
