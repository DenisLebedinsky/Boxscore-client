import React from "react";
import NBAGameTable from "../components/NBAGameTable";
import {
  render,
  fireEvent,
  getByTestId,
  cleanup,
  waitForElement
} from "react-testing-library";
import axios from "axios";
import mockData from "../__mocks__/mockData";

describe("NBAGameTable", () => {
  afterEach(cleanup);

  axios.get = jest.fn();
  axios.get.mockResolvedValueOnce(mockData);

  const { container, getByText, getByTestId } = render(<NBAGameTable />);

  it("render data", async () => {
    const awayTotalPoints = await waitForElement(() =>
      getByTestId("awayTotalPoints")
    );

    const awayTeamNameAbr = await waitForElement(() =>
      getByTestId("awayTeamNameAbr")
    );

    const homeTeamName = await waitForElement(() =>
      getByTestId("homeTeamName")
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/data", {
      params: { league: "NBA" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
