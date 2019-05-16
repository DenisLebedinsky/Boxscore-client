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
          }
        }
      }
    });
  }
};
