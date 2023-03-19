import shortid from 'shortid';

const ADD_COLUMN = 'app/columns/ADD_COLUMN';

export const getAllColumns = ({ columns }) => {
	return columns;
};

export const getColumnsByList = ({ columns }, listId) => {
	return columns.filter((column) => column.listId === listId);
};
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default columnsReducer;