import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSmurf, setError } from '../actions';

const AddForm = () => {
	const error = useSelector((state) => state.error);
	const dispatch = useDispatch();

	// Sets submitted Smurf's id in initialState
	const setId = () => {
		return JSON.stringify(Date.now());
	};

	const initialState = {
		id: setId(),
		name: '',
		position: '',
		nickname: '',
		description: '',
	};

	const [state, setState] = useState(initialState);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Sets error if form name, position, or nickname field is empty
		if (state.name === '' || state.position === '' || state.nickname === '') {
			dispatch(setError('Name, position and nickname fields are required.'));
		} else {
			// Calls addSmurf action and passes form data into it
			dispatch(addSmurf(state));

			// Resets form to initial state
			setState(initialState);
		}
	};

	return (
		<section>
			<h2>Add Smurf</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name:</label>
					<br />
					<input
						onChange={handleChange}
						value={state.name}
						name='name'
						id='name'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='position'>Position:</label>
					<br />
					<input
						onChange={handleChange}
						value={state.position}
						name='position'
						id='position'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='nickname'>Nickname:</label>
					<br />
					<input
						onChange={handleChange}
						value={state.nickname}
						name='nickname'
						id='nickname'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='description'>Description:</label>
					<br />
					<textarea
						onChange={handleChange}
						value={state.description}
						name='description'
						id='description'
					/>
				</div>
				{error && (
					<div
						data-testid='errorAlert'
						className='alert alert-danger'
						role='alert'
					>
						Error: {error}
					</div>
				)}
				<button>Submit Smurf</button>
			</form>
		</section>
	);
};

export default AddForm;
