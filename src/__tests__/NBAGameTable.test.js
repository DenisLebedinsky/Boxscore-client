import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import "jest-enzyme";
import NBAGameTable from "../components/NBAGameTable";
import axios from "../__mocks__/axios";

jest.mock("axios");

describe("NBAGameTable", () => {
  const getSpy = jest.spyOn(axios, "get");
  const NBAGame = mount(<NBAGameTable />);

  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NBAGameTable />, div);
  });

  it("check contain block", () => {
    const boxscore = <div className="tableScore" />;
    expect(NBAGame).toContainReact(boxscore);
  });

  it("check call axios.get", () => {
    expect(getSpy).toBeCalled();
  });
/*
  it("check contain child block", () => {
    const lableAwayTeam = <small>MIA</small>;
    expect(NBAGame).toContainReact(lableAwayTeam);
  });*/
});
