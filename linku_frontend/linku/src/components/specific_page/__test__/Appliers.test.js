import React from 'react';
import {mount} from 'enzyme';
import Appliers from '../Appliers';

describe('<Appliers/>', ()=>{

    const data = {
        appliers : [
            {name : "test_name_1", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g" },
            {name : "test_name_2", iamge : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"},
            {name : "test_name_3", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"}
        ]
    };

    const wrapper = mount(<Appliers appliers={data.appliers}/>);

    it('renders without exploding', () =>{
        expect(wrapper.length).toEqual(1);
    });

    it('renders with applier names',() =>{
        data.appliers.map(
            (applier) => {
                expect(wrapper.text()).toContain(applier.name);
            }
        );
    });

});
