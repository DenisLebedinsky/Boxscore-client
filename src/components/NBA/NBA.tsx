import React, { useState, useEffect } from 'react';
import PeriodScoresNBA from './PeriodScoresNBA'
import FooterNBA from './FooterNBA';

interface IProps {
	fetchData: Function;
	subscribeIo: Function;
}

const NBA: React.FC<IProps> = props => {

	const league = 'NBA'

	const [data, setData] = useState();

	useEffect(() => {
		const newData = props.fetchData(league)
		setData(newData)
	})

	useEffect(() => {
		const newDataIo = props.subscribeIo(league)
		setData(newDataIo)
	})

	const {
		away_period_scores,
		home_period_scores,
		away_team,
		home_team,
		extentions
	} = data;


	const periodScoresData = {
		away_period_scores,
		home_period_scores,
		awayAbbreviation: away_team.abbreviation,
		homeAbbreviation: home_team.abbreviation,
		awayPoints: extentions.away_totals.points,
		homePoints: extentions.home_totals.points,
	}

	const footerData = {
		AwayFirstName: away_team.first_name,
		HomeFirstName: home_team.first_name,
		awayAbbreviation: away_team.abbreviation,
		homeAbbreviation: home_team.abbreviation,
		awayTeamCount: '',
		homeTeamCount: '',
		status: data.event_information.status === 'completed' ? 'COM' : data.event_information.status
	}

	return (
		<div className="boxscore">
			<PeriodScoresNBA periodScoresData={periodScoresData} />
			<FooterNBA footerData={footerData} />
		</div>
	)
}

export default NBA;