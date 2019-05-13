import React from 'react';
import io from "socket.io-client";
import fetchfromApi from '../api';
import NBA from './NBA'
import MLB from './MLB'




const Widget: React.FC<IProps> = props => {


	const fetchData = async (league: string) => {

		const fetchApi = await fetchfromApi(league);

		return fetchApi
	}

	const subscribeIo = (league: string) => {
		const port = "http://localhost:3001";
		const socket = io(port);
		socket.on(`update_Data_${league}`, (data: any) => {
			console.log('updating', data)
		});
	}

	return (
		<div>
			<NBA fetchData={fetchData} subscribeIo={subscribeIo} />
			{/*<MLB fetchData={fetchData} subscribeIo={subscribeIo}/>)*/}
		</div>
	)

}

export default Widget