import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import fetchfromApi from '../api';
import NBA from './NBA'
import MLB from './MLB'

const port = "http://localhost:3001";
const socket = io(port);

interface IProps {
	league: String
}

const Widget: React.FC<IProps> = props => {

	const [data, setData] = useState();

	useEffect(() => {
		const fetchdata = async (league: String) => {

			const fetchApi = await fetchfromApi(league);
				
			setData(fetchApi);

			socket.on('update_Data_' + league, (fetchData: any) => {
				console.log('updating ' + league, fetchData)
				setData(fetchData)
			});
		}
		fetchdata(props.league);
	}, [props.league])


	return (
		<div>
	{data && (props.league === 'NBA' && <NBA data={data} />)}
	{data && (props.league === 'MLB' && <MLB data={data} />)}
		</div>
	)

}

export default Widget