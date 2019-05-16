import React from 'react';
import NBAGameTable from './NBAGameTable';
import MLBGameTable from './MLBGameTable';

const App: React.FC = () => {

	return (
		<div className="App">
			<NBAGameTable />
			<MLBGameTable />
		</div>
	);
}

export default App;