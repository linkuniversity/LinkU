import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Login from '../src/login/Login';
import SimpleLogin from '../src/login/SimpleLogin';
import SimpleLoginButton from '../src/login/SimpleLoginButton';


describe('<Login />', () => {
    const wrapper = shallow(<Login />);

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
