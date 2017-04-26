import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { buttonStyle } from '../utils/style/Button';

const emailRequired = value => value ? undefined : '이메일을 입력해주세요'
const emailCorrectForm = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    '올바른 이메일 형식이 아닙니다' : undefined
const universityEmailFormRequired = value =>
    value.substr(value.length - 5) == "ac.kr" ? undefined : '대학교 메일을 입력해주세요.'


const spanErrorStyle ={
    color: "#FF5A5A",
}

const renderField = ({ input, label, type, htmlFor, labelText, ref , isInActive, meta: { touched, error, warning } }) => (
    <div style={{marginTop: "20px"}}>
        <label htmlFor={htmlFor}>{labelText}</label>
        <div>
            {isInActive ? <input {...input} ref={ref} placeholder={label} disabled type={type}/> : <input {...input} ref={ref} placeholder={label} type={type}/>}
            {touched && ((error && <span style={spanErrorStyle}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


class UniversityVerificationMailSendForm extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        let formSubmitButton = null;
        if(this.props.is_university_email_verification_request_done){
            formSubmitButton = <Form.Button style={buttonStyle} fluid disabled>인증번호 발송 완료</Form.Button>
        }
        else{
            formSubmitButton = <Form.Button style={buttonStyle} fluid>인증번호 발송</Form.Button>
        }

        return (
            <Form loading={this.props.is_loading} onSubmit={this.props.handleSubmit}>
                <Field name="university_email" isInActive={this.props.is_university_email_verification_request_done} component={renderField} htmlFor="university_email" labelText="대학교 메일" type="text" validate={[emailRequired, emailCorrectForm, universityEmailFormRequired,]} />
                {formSubmitButton}
            </Form>
        );
    }
}

export default reduxForm({
    form: 'UniversityVerificationMailSendForm'
})(UniversityVerificationMailSendForm);
