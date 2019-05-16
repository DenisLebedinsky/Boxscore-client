import React from "react";
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import NBAGameTable from "../components/NBAGameTable";
import { act, findByProps } from 'react-dom/test-utils';
import axios from 'axios'
import mockApi from "../__mocks__/axios";
import TestRenderer from 'react-test-renderer';

it('render', ()=>{
const testRenderer = TestRenderer.create(<NBAGameTable />);
console.log(testRenderer.toTree());

const testInstance = testRenderer.root;

expect(testInstance.findByProps({className: "tableScore"}).children).toEqual([]);
})


/*
let GameTable;

beforeEach(() => {
  GameTable = document.createElement('div');
  document.body.appendChild(GameTable);
});

afterEach(() => {
  document.body.removeChild(GameTable);
  GameTable = null;
});

it('render', () => {
  // Тестируем первый рендер и метод componentDidMount
  act(() => {
    ReactDOM.render(<NBAGameTable />, GameTable);
  });

  const button = GameTable.querySelector('button');
  const label = GameTable.querySelector('p');
  

});

*/