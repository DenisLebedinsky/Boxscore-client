import React from "react";
import MLBGameTable from "../components/MLBGameTable";
import {
  render,
  fireEvent,
  getByTestId,
  cleanup,
  waitForElement
} from "react-testing-library";
import axios from "axios";
import mockData from "../__mocks__/mockDataNBA";

describe("MLBGameTable", () => {
  afterEach(cleanup);

  axios.get = jest.fn();
  axios.get.mockResolvedValueOnce(mockData);

  const { container, getByText, getByTestId } = render(<MLBGameTable />);

  it("test for render data", async () => {
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
      params: { league: "MLB" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
