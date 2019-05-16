import React from "react";
import ReactDOM from "react-dom";
import { mount, shallow } from "enzyme";
import "jest-enzyme";
import NBAGameTable from "../components/NBAGameTable";
import axios from 'axios'
import mockApi from "../__mocks__/axios";


jest.mock("axios");

describe("NBAGameTable", () => {


  const NBAGame = mount(<NBAGameTable />);

  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NBAGameTable />, div);
  });

  it("check contain block", () => {
    const boxscore = <div className="tableScore" />;
    expect(NBAGame).toContainReact(boxscore);
  });

  it('should fetch a team list', async () => {

    const getSpy = jest.spyOn(axios, 'get')
    const data = getSpy()
    let game = await data
    console.log(data)
    expect(getSpy).toBeCalled()
    const diveInstance = NBAGame.render()
    mockApi.get().then(() => {

      expect(NBAGame.state().game).toEqual(expect.objectContaining({
        away_period_scores: expect.any(Array),
        home_period_scores: expect.any(Array),
        away_team: expect.any(Object),
        home_team: expect.any(Object)
      }));
    })
  });

  it("check contain child block", () => {
    expect(NBAGame).toMatchSnapshot();
  });

});
