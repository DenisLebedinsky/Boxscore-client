import React, { useState, useEffect, ReactNode } from 'react';
import GameTable from './GameTable'

interface Ibatter_totals {
	batting_highlights: any;
	points: ReactNode;
	hits: ReactNode;
}

interface ITotalDetailsExtentions {
	away_totals: any;
	home_totals: any;
	away_batter_totals: Ibatter_totals;
	away_errors: string;
	home_batter_totals: Ibatter_totals;
}

interface ITotalDetails {
	extentions: ITotalDetailsExtentions;
}

interface IEventInformation {
	status: string;
}

interface ITeam {
	first_name: ReactNode;
	abbreviation: ReactNode;
}

interface IFooterGame {
	event_information: IEventInformation;
	away_team: ITeam;
	extentions: ITotalDetailsExtentions;
	home_team: ITeam;
}

interface IProps {
	getScoreTableUI(data: object): any,
	getTotalDetails(data: object): any,
	getFooterGame(data: object): any,
	fetchData(league: string): object;
	subscribeIo(league: string, setData: React.Dispatch<any>): object;
}

const NBAGameTable: React.FC<IProps> = props => {

	const league = 'NBA';
	const [data, setData] = useState();

	useEffect(() => {
		async function getData() {
			setData(await props.fetchData(league))
		}
		getData();
	}, [league])

	useEffect(() => {
		props.subscribeIo(league, setData);
	}, [league])

	const getTotalDetails = (data: ITotalDetails) => {
		if (!data) {
			return null;
		}
		return (
			<div className="totalDetails">
				<div className="boxscore__team__results boxscore__team__results--header">
					<span>Total</span>
				</div>
				<div className="boxscore__team__results">
					<span>{data.extentions.away_totals.points}</span>
				</div>
				<div className="boxscore__team__results">
					<span>{data.extentions.home_totals.points}</span>
				</div>
			</div>

		)
	};

	const getFooterGame = (data: IFooterGame) => {
		if (!data) {
			return null;
		}

		return (
			<div className="boxscore__details">
				<div className="boxscore__details__team boxscore__details__team--away">
					<p>
						<strong>{data.away_team.first_name}</strong><small>{data.away_team.abbreviation}</small>
					</p>
				</div>
				<div className="boxscore__details__info">
					<strong>{data.event_information.status}
						<br />
						4th {/*api response havn't this info*/}
					</strong>
				</div>
				<div className="boxscore__details__team boxscore__details__team--home">
					<p>
						<strong>{data.home_team.first_name}</strong><small>{data.home_team.abbreviation}</small>
					</p>
				</div>
			</div>

		)
	};

	return (
		<div className="boxscore">
			<div className="tableScore">
				{props.getScoreTableUI(data)}
				{getTotalDetails(data)}
			</div>
			{getFooterGame(data)}
		</div>
	)

}

export default GameTable(NBAGameTable);