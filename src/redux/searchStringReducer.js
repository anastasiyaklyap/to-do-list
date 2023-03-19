const UPDATE_SEARCHQUERY = 'app/searchQuery/UPDATE_SEARCHQUERY'

export const getQuery = ({ searchQuery }) => {
	return searchQuery;
};

export const updateSearchQuery = (payload) => ({
	type: UPDATE_SEARCHQUERY,
	payload,
});

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHQUERY:
      return action.payload
    default:
      return statePart;
  }
}
export default searchStringReducer;