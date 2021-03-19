import axios from 'axios';

export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => (dispatch) => {
	// Thunk action that triggers a loading status display, performs an axios call to retreive smurfs from the server, saves the result of that call to state and shows an error if one is made.
	dispatch({ type: FETCH_SMURFS_REQUEST });

	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
		});
};

// Standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (smurf) => {
	return { type: ADD_SMURF, payload: smurf };
};

// Standard action that allows us to set the value of the error message slice of state.
export const setError = (error) => {
	console.log(error);
	return { type: SET_ERROR, payload: error };
};
