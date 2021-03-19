import {
	FETCH_SMURFS_REQUEST,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_FAILURE,
	ADD_SMURF,
	SET_ERROR,
} from '../actions';

// initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
	smurfs: [],
	isLoading: false,
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// Case to accomidate the start of a smurf fetch.
		case FETCH_SMURFS_REQUEST:
			return {
				...state,
				isLoading: true,
				error: '',
			};

		// Case to accomidate the successful smurf api fetch.
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isLoading: false,
				error: '',
			};

		// Case to accomidate the failed smurf api fetch.
		case FETCH_SMURFS_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		// Case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into the smurf list.
		case ADD_SMURF:
			return {
				...state,
				smurfs: [...state.smurfs, action.payload],
			};

		// Case that adds in a value to the error message.
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
