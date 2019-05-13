export interface IGameInfo {
  stat: Array<number>;
  total: Array<string>;
  homeStats: Array<number | string>;
  homeTotal: Array<number | string>;
  homeTeamNameAbr: String;
  homeTeamName: String;
  homeTeamCount: String;
  awayStats: Array<number>;
  awayTotal: Array<number | string>;
  awayTeamNameAbr: String;
  awayTeamName: String;
  awayTeamCount: String;
  status: String,
  period: String
}
