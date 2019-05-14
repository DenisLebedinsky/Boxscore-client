import React from 'react'
import { shallow } from 'enzyme'
import NBAGameTable from '../components/NBAGameTable'


describe('<NBAGemeTable />', () => {
    const NBA = shallow(<NBAGameTable />)
    it('renders without crashing', () => {
        const NBA = shallow(<NBAGameTable />)

    });

})