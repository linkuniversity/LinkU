import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">이메일</label>
                <Field name="email" component="input" type="email"/>
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <Field name="password" component="input" type="password"/>
            </div>
            <div>
                <button type="submit">로그인</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'login'
})(LoginForm);
