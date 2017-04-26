import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from 'axios';

import { buttonStyle } from '../utils/style/Button';

const emailRequired = value => value ? undefined : '이메일을 입력해주세요'
const emailCorrectForm = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    '올바른 이메일 형식이 아닙니다' : undefined
const nameRequired = value => value ? undefined : '이름을 입력해주세요'
const phoneRequired = value => value ? undefined : '전화번호를 입력해주세요'
const phoneCorrectForm = value =>
    value && value.length != 11 ?
    "'-' 을 제외하고 11자리를 입력해주세요" : undefined
const passwordRequired = value => value ? undefined : '비밀번호를 입력해주세요'
const genderRequired = value => value ? undefined : '성별을 선택해주세요'
const universityEmailFormRequired = value =>
    value.substr(value.length - 5) == "ac.kr" ? undefined : '대학교 메일을 입력해주세요.'
const verificationNumberLength = value =>
    (value >= 1000 && value <= 9999) ? undefined: '올바른 숫자를 입력해주세요'


const spanErrorStyle ={
    color: "#FF5A5A",
}

const renderField = ({ input, label, type, htmlFor, labelText, ref ,meta: { touched, error, warning } }) => (
    <div style={{marginTop: "20px"}}>
        <label htmlFor={htmlFor}>{labelText}</label>
        <div>
            <input {...input} ref={ref} placeholder={label} type={type}/>
            {touched && ((error && <span style={spanErrorStyle}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


class SignupForm extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Field name="username" component={renderField} htmlFor="username" labelText="이메일" type="text" validate={[emailRequired, emailCorrectForm]}/>
                <Field name="name" component={renderField} htmlFor="name" labelText="이름" type="text" validate={[nameRequired]}/>
                <Form.Group inline>
                    <label htmlFor="gender">성별</label>
                    <Form.Field>
                        <Field name="gender" component="input" type="radio" value="F" checked/>
                        <label htmlFor="gender">여자</label>
                    </Form.Field>
                    <Form.Field>
                        <Field name="gender" component="input" type="radio" value="M"/>
                        <label htmlFor="gender">남자</label>
                    </Form.Field>
                </Form.Group>
                <Field name="phone_number" component={renderField} htmlFor="name" labelText="전화번호" type="number" validate={[phoneRequired, phoneCorrectForm]}/>
                <Form.Field>
                    <label htmlFor="password">비밀번호</label>
                    <Field name="password" component="input" type="password"/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password_check">비밀번호 확인</label>
                    <Field name="password_check" component="input" type="password"/>
                </Form.Field>
                <Form.Button style={buttonStyle} fluid>가입 완료</Form.Button>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'signup'
})(SignupForm);
