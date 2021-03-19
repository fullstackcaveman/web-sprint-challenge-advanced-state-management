import React, { useEffect } from 'react';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { fetchSmurfs } from './actions';
import { useDispatch } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSmurfs());
	}, [dispatch]);

	return (
		<div className='App'>
			<Header />

			<main>
				<SmurfList />
				<AddForm />
			</main>
		</div>
	);
};

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
