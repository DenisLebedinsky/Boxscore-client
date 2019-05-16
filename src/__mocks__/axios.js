export default {
  get: params => {
    return Promise.resolve({
      data: {
        league: "NBA",
        away_team: {
          abbreviation: "OKC",
          first_name: "Oklahoma City"
        },
        home_team: {
          abbreviation: "MIA",
          first_name: "Miami"
        },
        away_period_scores: [26, 23, 22, 35],
        home_period_scores: [31, 28, 36, 26],
        event_information: {
          status: "completed"
        },
        extentions: {
          away_totals: {
            points: 106
          },
          home_totals: {
            points: 121
          },
          home_batter_totals: {
            hits: 13,
            batting_highlights: "5-29, HR, 3 R, 3 RBI, 2B"
          },
          away_batter_totals: {
            hits: 7,
            batting_highlights: "10-33, 4 R, 4 RBI, 2B, SB"
          }
        }
      }
    });
  }
};
