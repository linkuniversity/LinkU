import React from 'react';
import {shallow} from 'enzyme';
import Comments from '../src/specific_page/Comments';

describe('<Comments />', () => {
    it( 'renders without exploding', () => {

        const comments = [
            {
                name: "Hanna Jung",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g",
                text: "오 부탄츄 맛있나요??",
                time: "2017-02-25T18:05:00+09:00"
            }, {
                name: "Hanna Jung",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g",
                text: "오 부탄츄 맛있나요????",
                time: "2017-02-25T18:07:00+09:00"
            }
        ];

        expect(
            shallow(
                <Comments comments = {comments}/>
            ).length
        ).toEqual(1);
    });
});
