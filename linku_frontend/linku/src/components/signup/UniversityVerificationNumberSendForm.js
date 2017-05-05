import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';
import { buttonStyle } from '../utils/style/Button';

const verificationNumberLength = value =>
    (value >= 1000 && value <= 9999) ? undefined: '올바른 숫자를 입력해주세요'


const spanErrorStyle ={
    color: "#FF5A5A",
}

const renderField = ({ input, label, type, htmlFor, labelText, ref, isInActive,meta: { touched, error, warning } }) => (
    <div style={{marginTop: "20px"}}>
        <label htmlFor={htmlFor}>{labelText}</label>
        <div>
            {isInActive ? <input {...input} ref={ref} placeholder={label} disabled type={type}/> : <input {...input} ref={ref} placeholder={label} type={type}/>}
            {touched && ((error && <span style={spanErrorStyle}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


class UniversityVerificationNumberSendForm extends Component{
    render() {
        let formSubmitButton = null;
        if(this.props.is_verify_auth_number_done){
            formSubmitButton = <Form.Button style={buttonStyle} fluid disabled>인증 완료</Form.Button>
        }
        else{
            formSubmitButton = <Form.Button style={buttonStyle} fluid>인증 요청</Form.Button>
        }

        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Field name="auth_number" isInActive={this.props.is_verify_auth_number_done} component={renderField} htmlFor="university_verification_number" labelText="인증번호" type="number" validate={[verificationNumberLength]} />
                {formSubmitButton}
            </Form>
        );
    }
}

export default reduxForm({
    form: 'UniversityVerificationNumberSendForm'
})(UniversityVerificationNumberSendForm);
