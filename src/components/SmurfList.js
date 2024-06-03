import React from 'react';
import { useSelector } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = () => {
	const smurfState = useSelector((state) => state);
	const { smurfs, isLoading } = smurfState;

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='listContainer'>
			{smurfs.map((smurf) => {
				return <Smurf key={smurf.id} smurf={smurf} />;
			})}
		</div>
	);
};

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
