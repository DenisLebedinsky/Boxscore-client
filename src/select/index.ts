import { IGameInfo } from '../types';

export const getNecessaryData = (data: Array<any>) => {

    const convertData = data.map((d: any) => {

        const res: IGameInfo = {
            stat: [],
            total: [],
            homeStats: [],
            homeTotal: [],
            homeTeamNameAbr: '',
            homeTeamName: '',
            homeTeamCount: '',
            awayStats: [],
            awayTotal: [],
            awayTeamNameAbr: '',
            awayTeamName: '',
						awayTeamCount: '',
						status: '',
						period: ''
        };

        res.homeStats = d.home_period_scores;
        res.homeTeamNameAbr = d.home_team.abbreviation;
        res.homeTeamName = d.home_team.first_name;

        res.awayTeamNameAbr = d.away_team.abbreviation;
        res.awayTeamName = d.away_team.first_name;
        res.awayStats = d.away_period_scores;



        if (d.league === 'NBA') {
            res.stat = [1, 2, 3, 4];
            res.total = ['Total'];
            res.homeTotal = [d.extentions.home_totals.points];
            res.awayTotal = [d.extentions.away_totals.points];

        }


        if (d.league === 'MLB') {
            res.stat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            res.total = ['R', 'H', 'E'];
            const homeSum = d.home_period_scores.reduce((a: number, b: number) => a + b)
            const awaySum = d.away_period_scores.reduce((a: number, b: number) => a + b)
            res.homeTotal = [homeSum, d.extentions.home_batter_totals.hits, d.extentions.home_errors];
            res.awayTotal = [awaySum, d.extentions.away_batter_totals.hits, d.extentions.away_errors];
            res.homeTeamCount = d.extentions.home_batter_totals.batting_highlights.split(',').shift();
            res.awayTeamCount = d.extentions.away_batter_totals.batting_highlights.split(',').shift();
						res.status = 'BTM'
						res.period = '9th'
        }

        fillArr(res.awayStats, res.stat);
        fillArr(res.homeStats, res.stat);
        fillArr(res.homeTotal, res.total);
        fillArr(res.awayTotal, res.total);


        return res
    })

    return convertData
}

function fillArr(arr1: Array<number | string>, arr2: Array<number | string>) {

    while (arr1.length > arr2.length) {
        arr1.push('-');
    }

}