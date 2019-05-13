import React from 'react';

interface IProps {

    footerData: {
        AwayFirstName: String;
        HomeFirstName: String;
        awayAbbreviation: String;
        homeAbbreviation: String;
        awayTeamCount: String;
        homeTeamCount: String;
        status: String;
    }

}

const FooterNBA: React.FC<IProps> = props => {
    const {
        AwayFirstName,
        awayAbbreviation,
        awayTeamCount,
        status,
        HomeFirstName,
        homeAbbreviation,
        homeTeamCount
    } = props.footerData;

    return (
        <div className="boxscore__details">
            <div className="boxscore__details__team boxscore__details__team--away">
                <p>
                    <strong>{AwayFirstName}</strong><small>{awayAbbreviation}</small>
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
                    <strong>{HomeFirstName}</strong><small>{homeAbbreviation}</small>
                </p>
                <span>{homeTeamCount}</span>
            </div>
        </div>
    )
}

export default FooterNBA;