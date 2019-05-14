import React from 'react';
import NBAGameTable from './NBAGemeTable';
import MLBGameTable from './MLBGemeTable';

const App: React.FC = () => {

	return (
		<div className="App">
			<NBAGameTable />
			<MLBGameTable />
		</div>
	);
}

export default App;