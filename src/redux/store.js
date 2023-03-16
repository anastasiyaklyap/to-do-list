import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

export const getQuery = ({ searchQuery }) => {
	return searchQuery;
};

export const getAllLists = ({ lists }) => {
	return lists;
};

export const getListById = ({ lists }, listId) => {
	return lists.find((list) => list.id === listId);
};

export const getAllColumns = ({ columns }) => {
	return columns;
};

export const getColumnsByList = ({ columns }, listId) => {
	return columns.filter((column) => column.listId === listId);
};

export const getFilteredCards = ({ cards, searchQuery }, columnId) =>
	cards.filter(
		(card) => card.columnId === columnId && strContains(card.title, searchQuery)
	);

export const getFavoriteCards = ({ cards }) => {
	return cards.filter((card) => card.isFavorite);
};

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const updateSearchQuery = (payload) => ({
	type: 'UPDATE_SEARCHQUERY',
	payload,
});

export const toggleCardFavorite = (payload) => ({
	type: 'TOGGLE_CARD_FAVORITE',
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
		case 'ADD_LIST':
			return {
				...state,
				lists: [...state.lists, { ...action.payload, id: shortid() }],
			};
		case 'UPDATE_SEARCHQUERY':
			return {
				...state,
				searchQuery: action.payload,
			};
		case 'TOGGLE_CARD_FAVORITE':
			return {
				...state,
				cards: state.cards.map((card) =>
					card.id === action.payload
						? { ...card, isFavorite: !card.isFavorite }
						: card
				),
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
