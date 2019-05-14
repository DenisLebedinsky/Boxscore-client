import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import GameTable from './GameTable'

interface IProps {
	helpers: {
		getScoreTableUI(data: object): any,
		getTotalDetails(data: object): any,
		getFooterGame(data: object): any,
		fetchData(league: string): object;
		subscribeIo(league: string, setData: React.Dispatch<any>): object;
	}
}

const NBAGameTable: React.FC<IProps> = props => {

	const league = 'NBA';
	const [data, setData] = useState();

	useEffect(() => {

		const res = props.helpers.fetchData(league);

		setData(res);

	})


	useEffect(() => {
		props.helpers.subscribeIo(league, setData);
	})

	return (
		<div>
			<div className="boxscore">
				<div className="tableScore">
					{props.helpers.getScoreTableUI(data)}
					{props.helpers.getTotalDetails(data)}
				</div>
				{props.helpers.getFooterGame(data)}
			</div>

		</div>
	)

}

export default GameTable(NBAGameTable);