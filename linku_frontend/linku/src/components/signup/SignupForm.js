import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';

const SignupForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label htmlFor="username">이메일</label>
                <Field name="username" component="input" type="text"/>
            </Form.Field>
            <Form.Field>
                <label htmlFor="nickname">닉네임</label>
                <Field name="nickname" component="input" type="text"/>
            </Form.Field>
            <Form.Group inline>
                <label htmlFor="gender">성별</label>
                <Form.Field>
                    <Field name="gender" component="input" type="radio" value="F"/>
                    <label htmlFor="gender">여자</label>
                </Form.Field>
                <Form.Field>
                    <Field name="gender" component="input" type="radio" value="M"/>
                    <label htmlFor="gender">남자</label>
                </Form.Field>
            </Form.Group>
            <Form.Field>
                <label htmlFor="phone_number">전화번호</label>
                <Field name="phone_number" component="input" type="number"/>
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">비밀번호</label>
                <Field name="password" component="input" type="password"/>
            </Form.Field>
            <Form.Field>
                <label htmlFor="password_check">비밀번호 확인</label>
                <Field name="password_check" component="input" type="password"/>
            </Form.Field>
            <Form.Field>
                <label htmlFor="authenticated_university_email">대학교 이메일을 적어주세요</label>
                <Field name="authenticated_university_email" component="input" type="email"/>
            </Form.Field>
            <Form.Button fluid>가입 완료</Form.Button>
        </Form>
    );
}

export default reduxForm({
    form: 'signup'
})(SignupForm);
