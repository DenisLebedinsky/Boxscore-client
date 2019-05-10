import React from 'react';

interface Props {
		stat: Array<number>,
		total: Array<string>,

		homeStats: Array<number | string>,
		homeTotal: Array<number | string>,
		homeTeamNameAbr: String,
		homeTeamName: String,
		homeTeamCount: String,
		awayStats: Array<number>,
		awayTotal: Array<number | string>,
		awayTeamNameAbr: String,
		awayTeamName: String,
		awayTeamCount: String

}

const Widget: React.FC<Props> = props => {

return (
	<div className="boxscore">
		<div className="boxscore__team boxscore__team--header">
			<label></label>
			<div className="boxscore__team__units">
				{props.stat && props.stat.map((el: number, i: number) => <span key={i}>{el}</span>)}
			</div>
			<div className="boxscore__team__results">
				{props.total && props.total.map((el: string, i: number) => <span key={i}>{el}</span>)}
			</div>
		</div>
		<div className="boxscore__team boxscore__team--away">
			<label>{props.homeTeamNameAbr}</label>
			<div className="boxscore__team__units">
				{props.awayStats && props.awayStats.map((el: number, i: number) => <span key={i}>{el}</span>)}
			</div>
			<div className="boxscore__team__results">
				{props.awayTotal && props.awayTotal.map((el: string, i: number) => <span key={i}>{el}</span>)}
			</div>
		</div>
		<div className="boxscore__team boxscore__team--home">
			<label>{props.homeTeamName}</label>
			<div className="boxscore__team__units">
				{props.homeStat && props.hometat.map((el: number, i: number) => <span key={i}>{el}</span>)}
			</div>
			<div className="boxscore__team__results">
				{props.homeTotal && props.homeTotal.map((el: number, i: number) => <span key={i}>{el}</span>)}
			</div>
		</div>
		<div className="boxscore__details">
			<div className="boxscore__details__team boxscore__details__team--away">
				<p>
					<strong>{props.awayTeamName}</strong><small>{props.awayTeamNameAbr}</small>
				</p>
				<span>{props.awayTeamCount}</span>
			</div>
			<div className="boxscore__details__info">
				<strong>Btm<br />9th</strong>
			</div>
			<div className="boxscore__details__team boxscore__details__team--home">
				<p>
					<strong>{props.homeTeamName}</strong><small>{props.homeTeamNameAbr}</small>
				</p>
				<span>{props.homeTeamCount}</span>
			</div>
		</div>
	</div>
)
}

export default Widget;