import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import "jest-enzyme";
import MLBGameTable from "../components/MLBGameTable";
import axios from "../__mocks__/axios";

jest.mock("axios");

describe("NBAGameTable", () => {
	const getSpy = jest.spyOn(axios, "get");


  const NBAGame = mount(<MLBGameTable />);

  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MLBGameTable />, div);
  });

  it("check contain block", () => {
    const boxscore = <div className="tableScore" />;
    expect(NBAGame).toContainReact(boxscore);
  });

  it("check call axios.get", () => {
    expect(getSpy).toBeCalled();
	});
	
  it("check contain child block", () => {
    expect(NBAGame).toMatchSnapshot();
	});
	
});
