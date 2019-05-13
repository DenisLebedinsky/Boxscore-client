import React from 'react';

interface IProps {
	data: {
		home_period_scores: Array <string>,
		away_period_scores: Array <string>,
		event_information: {
			status: String,
		}
		home_team: {
			abbreviation: String,
			first_name: String
		},
		away_team: {
			abbreviation: String,
			first_name: String
		},
		extentions: any
	}
}

const NBA: React.FC<IProps> = props => {
	const {
		away_period_scores,
		home_period_scores,
		away_team,
		home_team,
		extentions
	} = props.data;
	const status = props.data.event_information.status === 'completed' ? 'COM' : props.data.event_information.status;
	const awayTeamCount = '';
	const homeTeamCount = '';



	return (
		<div className="boxscore">
			<div className="boxscore__team boxscore__team--header">
				<label></label>
				<div className="boxscore__team__units">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
				</div>
				<div className="boxscore__team__results">
					<span>Total</span>
				</div>
			</div>
			<div className="boxscore__team boxscore__team--away">
				<label>{away_team.abbreviation}</label>
				<div className="boxscore__team__units">
					{away_period_scores && away_period_scores.map((el: string, i: number) => <span key={'NBA_away_results_' + i}>{el}</span>)}
				</div>
				<div className="boxscore__team__results">
					<span>{extentions.away_totals.points}</span>
				</div>
			</div>
			<div className="boxscore__team boxscore__team--home">
				<label>{home_team.abbreviation}</label>
				<div className="boxscore__team__units">
					{home_period_scores && home_period_scores.map((el: string, i: number) => <span key={'NBA_home_stats_' + i}>{el}</span>)}
				</div>
				<div className="boxscore__team__results">
					<span>{extentions.home_totals.points}</span>
				</div>
			</div>
			<div className="boxscore__details">
				<div className="boxscore__details__team boxscore__details__team--away">
					<p>
						<strong>{away_team.first_name}</strong><small>{away_team.abbreviation}</small>
					</p>
					<span>{awayTeamCount}</span>
				</div>
				<div className="boxscore__details__info">
					<strong>
						{status}
						<br />9th</strong>
				</div>
				<div className="boxscore__details__team boxscore__details__team--home">
					<p>
						<strong>{home_team.first_name}</strong><small>{home_team.abbreviation}</small>
					</p>
					<span>{homeTeamCount}</span>
				</div>
			</div>
		</div>
	)
}

export default NBA;