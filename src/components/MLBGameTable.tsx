import React, { useState, useEffect, ReactNode } from 'react';
import GameTable from './GameTable'

interface Ibatter_totals {
	batting_highlights: any;
	hits: ReactNode;
}

interface ITotalDetailsExtentions {
	away_batter_totals: Ibatter_totals;
	away_errors: string;
	home_batter_totals: Ibatter_totals;
}

interface ITotalDetails {
	away_period_scores: any;
	home_period_scores: any;
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
	getTotalDetails(data: ITotalDetails): any,
	getFooterGame(data: object): any,
	fetchData(league: string): object;
	subscribeIo(league: string, setData: React.Dispatch<any>): object;
}

const MLBGameTable: React.FC<IProps> = props => {

	const league = 'MLB';
	const [data, setData] = useState();

	useEffect(() => {
		async function getData() {
			setData(await props.fetchData(league))
		}
		getData();
	}, [league])


	useEffect(() => {
		props.subscribeIo(league, setData);
	}, [data])



	const getTotalDetails = (data: ITotalDetails) => {
		if (data) {
			const awayPoints = data.away_period_scores.reduce((a: string, b: number) => parseInt(a) + b)
			const homePoints = data.home_period_scores.reduce((a: string, b: number) => parseInt(a) + b)
			return (
				<div className="totalDetails">
					<div className="boxscore__team__results boxscore__team__results--header">
						<span>R</span>
						<span>H</span>
						<span>E</span>
					</div>
					<div className="boxscore__team__results">
						<span data-testid="awayTotalPoints">{awayPoints}</span>
						<span>{data.extentions.away_batter_totals.hits}</span>
						<span>{data.extentions.away_errors}</span>
					</div>
					<div className="boxscore__team__results">
						<span>{homePoints}</span>
						<span>{data.extentions.home_batter_totals.hits}</span>
						<span>{data.extentions.away_errors}</span>
					</div>
				</div>

			)
		}
	};

	const getFooterGame = (data: IFooterGame) => {
		console.log(data)
		if (!data) {
			return null;
		}
		const status = data.event_information.status === 'completed' ? 'BTM' : data.event_information.status;
		return (
			<div className="boxscore__details">
				<div className="boxscore__details__team boxscore__details__team--away">
					<p data-testid="homeTeamName">
						<strong>{data.away_team.first_name}</strong><small>{data.away_team.abbreviation}</small>
					</p>
					<span>{data.extentions.away_batter_totals.batting_highlights.split(',').shift()}</span>
				</div>
				<div className="boxscore__details__info">
					<strong>{status}
						<br />
						9th {/*api response havn't this info*/}
					</strong>
				</div>
				<div className="boxscore__details__team boxscore__details__team--home">
					<p>
						<strong>{data.home_team.first_name}</strong><small>{data.home_team.abbreviation}</small>
					</p>
					<span>{data.extentions.home_batter_totals.batting_highlights.split(',').shift()}</span>
				</div>
			</div>

		)
	};

	return (
		<div>
			<div className="boxscore">
				<div className="tableScore">
					{props.getScoreTableUI(data)}
					{getTotalDetails(data)}
				</div>
				{getFooterGame(data)}
			</div>

		</div>
	)

}

export default GameTable(MLBGameTable);