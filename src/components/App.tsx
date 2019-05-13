import React from 'react';
import Widget from './Widget';

const App: React.FC = props => {

	return (
		<div className="App">
			<Widget league='NBA' />
			<Widget league='MLB' />
		</div>
	);
}

export default App;
