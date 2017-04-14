import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react'

const LoginForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="email">이메일</label>
            <Field name="email" component="input" type="email"/>
            <label htmlFor="password">비밀번호</label>
            <Field name="password" component="input" type="password"/>
            <Button type="submit" fluid>로그인</Button>
        </Form>
    );
}

export default reduxForm({
    form: 'login'
})(LoginForm);
