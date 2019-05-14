import React from 'react'
import NBAGameTable from './NBAGemeTable'
import fetchfromApi from '../api';
import io from 'socket.io-client';

function GameTable(WrappedComponent:any){
	
	const helpers = {
		getScoreTableUI: (data:object) => {
			return (
				<div className="teamNames_scoreDetails">
					<div className="teamNames">
						<label className="head_lable"></label>
						<label>CHC</label>
						<label>STL</label>
					</div>
					<div className="scoreDetails">
						<div className="boxscore__team boxscore__team--header">
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
						</div>
						<div className="boxscore__team boxscore__team--away">
							<div className="boxscore__team__units">
								<span>1</span>
								<span>0</span>
								<span>2</span>
								<span>0</span>
								<span>0</span>
								<span>0</span>
								<span>0</span>
								<span>1</span>
								<span>1</span>
							</div>
						</div>
						<div className="boxscore__team boxscore__team--home">
							<div className="boxscore__team__units">
								<span>0</span>
								<span>0</span>
								<span>0</span>
								<span>3</span>
								<span>0</span>
								<span>0</span>
								<span>0</span>
								<span>0</span>
								<span>1</span>
							</div>
						</div>
					</div>
				</div>
			)
		},
		
		getTotalDetails:(data:object) =>{
			return(
				<div className="totalDetails">
					<div className="boxscore__team__results boxscore__team__results--header">
						<span>R</span>
						<span>H</span>
						<span>E</span>
					</div>
					<div className="boxscore__team__results">
						<span>5</span>
						<span>12</span>
						<span>0</span>
					</div>
					<div className="boxscore__team__results">
						<span>4</span>
						<span>8</span>
						<span>1</span>
					</div>
				</div>

			)
		},

		getFooterGame: (data: object) => {
			return (
				<div className="boxscore__details">
					<div className="boxscore__details__team boxscore__details__team--away">
						<p>
							<strong>Cubs</strong><small>CHC1</small>
						</p>
						<span>56-38</span>
					</div>
					<div className="boxscore__details__info">
						<strong>Btm<br />9th</strong>
					</div>
					<div className="boxscore__details__team boxscore__details__team--home">
						<p>
							<strong>Cardinals</strong><small>STL</small>
						</p>
						<span>56-38</span>
					</div>
				</div>

			)
		},

		fetchData: async (league: string) => {
			const res = await fetchfromApi(league);
			return res
		},

		subscribeIo: (league: string, setData: React.Dispatch<any>)=>{
			const port = "/";
			const socket = io(port);
			socket.on(`update_Data_${league}`, (data: any) => {
				setData(data)
			});
		}
	}


	return (props:any)=>{
		return <WrappedComponent {...props}{...helpers}/>
	}
}

export default GameTable;
