import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Login from '../Login';
import SimpleLogin from '../SimpleLogin';
import SimpleLoginButton from '../SimpleLoginButton';
import CloseButton from '../CloseButton';

import configureStore from 'redux-mock-store';
import { reducers } from '../../../reducers';
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares);

const initialState = {
    login : {
        isVisible : false
    }
};
const store = mockStore(initialState);

describe('<Login />', () => {
    const wrapper = mount(
        <Provider store = {store}>
            <Login />
        </Provider>
    );

    it('renders without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('confirms correct login title', () => {
        const homeTitle = "링쿠 로그인";

        expect(wrapper.find('h').text()).toEqual(homeTitle);
    });

    it('renders simple login children', () => {
        expect(wrapper.find(SimpleLogin)).toHaveLength(1);
    });

    it('renders a CloseButton component', () => {
        expect(wrapper.find(CloseButton)).toHaveLength(1);
    });
});

describe('<CloseButton />',() => {
    it('can be clicked by user', () => {
        const wrapper = mount(
            <Provider store = {store}>
                <CloseButton />
            </Provider>
        );

        wrapper.find(CloseButton).simulate('click');
    });
});

describe('<SimpleLogin />', () => {
    const wrapper = shallow(<SimpleLogin />);

    it('confirms correct simple login title', () => {
        const simpleLoginTitle = "간편 로그인";

        expect(wrapper.find('label').text()).toEqual(simpleLoginTitle);
    });

    it('renders a simple login button when SimpleLoginButton has a state', () => {
        wrapper.setState({
            simpleLoginButtonData: [{
                buttonName: 'test button'
            }]
        });
        expect(wrapper.find(SimpleLoginButton)).toHaveLength(1);
    });
});

describe('<SimpleLoginButton />', () => {
    const loginMockFunction = sinon.spy();
    const simpleLoginButtonInfo = {
        className: 'test class name',
        buttonName: 'test button name',
        loginFunction: loginMockFunction
    };

    const wrapper = mount(<SimpleLoginButton simpleLoginButtonInfo = { simpleLoginButtonInfo }/>);
    const simpleLoginButton = wrapper.find({className: 'test class name'});

    it('test simple login button class & button name', () => {
        expect(simpleLoginButton.text()).toEqual('test button name');
    });

    it('simulate simple login button click events', () => {
        simpleLoginButton.find({className: 'test class name'}).simulate('click');
        expect(loginMockFunction.calledOnce).toEqual(true);
    });
});
