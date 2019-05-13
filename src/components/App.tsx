import React, { useState, useEffect } from 'react';
import fetchfromApi from '../api';
import { getNecessaryData } from '../select'
import { IGameInfo } from '../types';
import Widget from './Widget';
import subscribeToUpdate from '../api/socket.io'

const App: React.FC = props => {
	const [leagues] = useState<Array<string>>(['NBA', 'MLB']);
	const [data, setData] = useState<Array<IGameInfo>>([]);

	useEffect(() => {

		const fetchdata = async (leagues: string[]) => {
			if (leagues) {
				const arr = leagues.map((league: string) => fetchfromApi(league).catch(function () { }))
				const fetchApi = await Promise.all(arr)
				const schedullerUpdate = subscribeToUpdate();

				if (fetchApi) {
					setData(getNecessaryData(fetchApi));
				}

				if (schedullerUpdate) {
			//		setData(getNecessaryData(schedullerUpdate));
				}

			}
		}
		fetchdata(leagues);

	}, [leagues]);

	return (
		<div className="App">
			{data && data.map((game: IGameInfo, i: number) => <Widget key={i} data={game} />)}
		</div>
	);
}

export default App;
