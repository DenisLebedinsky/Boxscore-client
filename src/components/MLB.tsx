import React from 'react';

interface IProps {
	data: {
		home_period_scores: Array<string>,
		away_period_scores: Array<string>,
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

const MLB: React.FC<IProps> = props => {
	const {
		away_period_scores,
		home_period_scores,
		away_team,
		home_team,
		extentions
	} = props.data;
	const status = props.data.event_information.status === 'completed' ? 'BTM' : props.data.event_information.status;
	
	const awayTeamCount = extentions.away_batter_totals.batting_highlights.split(',').shift();
	const homeTeamCount = extentions.home_batter_totals.batting_highlights.split(',').shift();
	const away_points = extentions.away_batter_totals.points;
	const home_points = extentions.home_batter_totals.points;
	const away_hits = extentions.away_batter_totals.hits;
	const home_hits = extentions.home_batter_totals.hits;


	return (
		<div className="boxscore">
			<div className="boxscore__team boxscore__team--header">
				<label></label>
				<div className="boxscore__team__units">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
					<span>8</span>
					<span>9</span>
				</div>
				<div className="boxscore__team__results">
					<span>R</span>
					<span>H</span>
					<span>E</span>
				</div>
			</div>
			<div className="boxscore__team boxscore__team--away">
				<label>{away_team.abbreviation}</label>
				<div className="boxscore__team__units">
					{away_period_scores && away_period_scores.map((el: string, i: number) => <span key={'NBA_away_results_' + i}>{el}</span>)}
				</div>
				<div className="boxscore__team__results">
					<span>{away_points}</span>
					<span>{away_hits}</span>
					<span>{extentions.away_errors}</span>
				</div>
			</div>
			<div className="boxscore__team boxscore__team--home">
				<label>{home_team.abbreviation}</label>
				<div className="boxscore__team__units">
					{home_period_scores && home_period_scores.map((el: string, i: number) => <span key={'NBA_home_stats_' + i}>{el}</span>)}
				</div>
				<div className="boxscore__team__results">
					<span>{home_points}</span>
					<span>{home_hits}</span>
					<span>{extentions.away_errors}</span>
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

export default MLB;