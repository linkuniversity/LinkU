import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';

const emailRequired = value => value ? undefined : '이메일을 입력해주세요'
const emailCorrectForm = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    '올바른 이메일 형식이 아닙니다' : undefined
const nicknameRequired = value => value ? undefined : '닉네임을 입력해주세요'
const phoneRequired = value => value ? undefined : '전화번호를 입력해주세요'
const phoneCorrectForm = value =>
    value && value.length != 11 ?
    "'-' 을 제외하고 11자리를 입력해주세요" : undefined
const passwordRequired = value => value ? undefined : '비밀번호를 입력해주세요'
const genderRequired = value => value ? undefined : '성별을 선택해주세요'


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

const SignupForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="username" component={renderField} htmlFor="username" labelText="이메일" type="text" validate={[emailRequired, emailCorrectForm]}/>
            <Field name="nickname" component={renderField} htmlFor="nickname" labelText="닉네임" type="text" validate={[nicknameRequired]}/>
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
            <Field name="phone_number" component={renderField} htmlFor="nickname" labelText="전화번호" type="number" validate={[phoneRequired, phoneCorrectForm]}/>
            <Form.Field>
                <label htmlFor="password">비밀번호</label>
                <Field name="password" component="input" type="password"/>
            </Form.Field>
            <Form.Field>
                <label htmlFor="password_check">비밀번호 확인</label>
                <Field name="password_check" component="input" type="password"/>
            </Form.Field>
            <Field name="authenticated_university_email" component={renderField} htmlFor="authenticated_university_email" labelText="대학교 이메일" type="text" validate={[emailRequired, emailCorrectForm]}/>
            <Form.Button fluid>가입 완료</Form.Button>
        </Form>
    );
}

export default reduxForm({
    form: 'signup'
})(SignupForm);
