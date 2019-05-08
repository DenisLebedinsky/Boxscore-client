import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Widget from './Widget';


const App: React.FC = props => {
	const [leagues] = useState<Array<string>>(['NBA']);
	const [data, setData] = useState<Array<any>>([]);
	useEffect(() => {

		const fetchfromApi = (league: string) => {
			const url = 'http://localhost:3001/data';
			return axios
				.get(url, { params: { league } })
				.then(function (response) {
					return response.data
				})
				.catch(function (err) {
					console.error(err)
				})
		}

		const fetchdata = async (leagues: string[] ) => {
			if (leagues) {
				const arr = leagues.map((league: string) => fetchfromApi(league).catch(function () { }))
				const res = await Promise.all(arr);
				setData(res)
			}
		}
		fetchdata(leagues);

	}, [leagues]);

	return (
		<div className="App">
			{data && data.map((game: any) => <Widget data={game} /> )}
		</div>
	);
}

export default App;
