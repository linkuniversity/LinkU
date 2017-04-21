import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';


const emailRequired = value => value ? undefined : '이메일을 입력해주세요'
const passwordRequired = value => value ? undefined : '비밀번호를 입력해주세요'
const emailCorrectForm = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  '올바른 이메일 형식이 아닙니다' : undefined

const spanErrorStyle ={
    color: "#FF5A5A",
}

const renderField = ({ input, label, type, htmlFor, labelText, meta: { touched, error, warning } }) => (
    <div style={{marginTop: "20px"}}>
        <label htmlFor={htmlFor}>{labelText}</label>
        <div>
        <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span style={spanErrorStyle}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const LoginForm = ({handleSubmit, submitting}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="username" component={renderField} htmlFor="username" labelText="이메일" type="text" validate={[emailRequired, emailCorrectForm]}/>
            <Field name="password" component={renderField} htmlFor="password" labelText="비밀번호" type="password" validate={passwordRequired}/>
            <Button type="submit" disabled={submitting} fluid>로그인</Button>
        </Form>
    );
}

export default reduxForm({
    form: 'login'
})(LoginForm);
