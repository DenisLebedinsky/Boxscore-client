import React, {ReactNode} from 'react'
import fetchfromApi from '../api';
import io from 'socket.io-client';

interface ITeam {
	first_name: ReactNode;
	abbreviation: ReactNode;
}

interface IScoreTableUI {
	away_team: ITeam;
	home_team: ITeam;
	away_period_scores: Array<string>;
	home_period_scores: Array<string>;
}

function GameTable(WrappedComponent: any) {

	const helpers = {
		getScoreTableUI: (data: IScoreTableUI) => {
			if(data){
			
			return (
				<div className="teamNames_scoreDetails">
					<div className="teamNames">
						<label className="head_lable"></label>
						<label>{data.away_team.abbreviation}</label>
						<label>{data.home_team.abbreviation}</label>
					</div>
					<div className="scoreDetails">
						<div className="boxscore__team boxscore__team--header">
							<div className="boxscore__team__units">
								{data && data.away_period_scores.map((el: string, i: number) => <span key={`units_${i + 1}`}>{i + 1}</span>)}
							</div>
						</div>
						<div className="boxscore__team boxscore__team--away">
							<div className="boxscore__team__units">
								{data && data.away_period_scores.map((el: string, i: number) => <span key={`away_team_score_${i}`}>{el}</span>)}
							</div>
						</div>
						<div className="boxscore__team boxscore__team--home">
							<div className="boxscore__team__units">
								{data && data.home_period_scores.map((el: string, i: number) => <span key={`home_team_score_${i}`}>{el}</span>)}
							</div>
						</div>
					</div>
				</div>
			)
			}
		},


		fetchData: async(league: string) => {			
			return fetchfromApi(league)
		},

		subscribeIo: (league: string, setData: React.Dispatch<any>) => {
			const socket = io("/socket");
			socket.on(`update_Data_${league}`, (data: any) => {
				console.log(data)
				setData(data)
			});
		}
	}


	return (props: any) => {
		return <WrappedComponent {...props}{...helpers} />
	}
}

export default GameTable;
