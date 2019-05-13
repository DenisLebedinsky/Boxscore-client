import React from 'react';
import { IGameInfo } from '../types';

interface IProps {
	data: IGameInfo
}

const Widget: React.FC<IProps> = props => {

return (
	<div className="boxscore">
		<div className="boxscore__team boxscore__team--header">
			<label></label>
			<div className="boxscore__team__units">
				{props.data.stat && props.data.stat.map((el: number, i: number) => <span key={i}>{el}</span>)}
			</div>
			<div className="boxscore__team__results">
				{props.data.total && props.data.total.map((el: string, i: number) => <span key={i}>{el}</span>)}
			</div>
		</div>
		<div className="boxscore__team boxscore__team--away">
			<label>{props.data.awayTeamNameAbr}</label>
			<div className="boxscore__team__units">
				{props.data.awayStats && props.data.awayStats.map((el: number, i: number) => <span key={i}>{el}</span>)}
			</div>
			<div className="boxscore__team__results">
				{props.data.awayTotal && props.data.awayTotal.map((el: any, i: number) => <span key={i}>{el}</span>)}
			</div>
		</div>
		<div className="boxscore__team boxscore__team--home">
			<label>{props.data.homeTeamNameAbr}</label>
			<div className="boxscore__team__units">
				{props.data.homeStats && props.data.homeStats.map((el: any, i: number) => <span key={i}>{el}</span>)}
			</div>
			<div className="boxscore__team__results">
				{props.data.homeTotal && props.data.homeTotal.map((el: any, i: number) => <span key={i}>{el}</span>)}
			</div>
		</div>
		<div className="boxscore__details">
			<div className="boxscore__details__team boxscore__details__team--away">
				<p>
					<strong>{props.data.awayTeamName}</strong><small>{props.data.awayTeamNameAbr}</small>
				</p>
				<span>{props.data.awayTeamCount}</span>
			</div>
			<div className="boxscore__details__info">
				<strong>{props.data.status}<br />{props.data.period}</strong>
			</div>
			<div className="boxscore__details__team boxscore__details__team--home">
				<p>
					<strong>{props.data.homeTeamName}</strong><small>{props.data.homeTeamNameAbr}</small>
				</p>
				<span>{props.data.homeTeamCount}</span>
			</div>
		</div>
	</div>
)
}

export default Widget;