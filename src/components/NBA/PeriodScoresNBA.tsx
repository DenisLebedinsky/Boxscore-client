import React from 'react';
import { number } from 'prop-types';

interface IProps {
    periodScoresData: {
        away_period_scores: Array<string>;
        home_period_scores: Array<string>;
        awayAbbreviation: String;
        homeAbbreviation: String;
        awayPoints: String;
        homePoints: String;
    }
}

const PeriodScoresNBA: React.FC<IProps> = props => {
    const {
        away_period_scores,
        home_period_scores,
        awayAbbreviation,
        homeAbbreviation,
        awayPoints,
        homePoints,
    } = props.periodScoresData;

    return (
        <div>
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
                <label>{awayAbbreviation}</label>
                <div className="boxscore__team__units">
                    {away_period_scores && away_period_scores.map((el: string, i: number) => <span key={'NBA_away_results_' + i}>{el}</span>)}
                </div>
                <div className="boxscore__team__results">
                    <span>{awayPoints}</span>
                </div>
            </div>
            <div className="boxscore__team boxscore__team--home">
                <label>{homeAbbreviation}</label>
                <div className="boxscore__team__units">
                    {home_period_scores && home_period_scores.map((el: string, i: number) => <span key={'NBA_home_stats_' + i}>{el}</span>)}
                </div>
                <div className="boxscore__team__results">
                    <span>{homePoints}</span>
                </div>
            </div>
        </div>
    )
}

export default PeriodScoresNBA