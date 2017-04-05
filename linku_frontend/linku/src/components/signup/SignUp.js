import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignUp = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                링쿠 회원가입 페이지
            </div>
            <div>
                <label htmlFor="username">이름</label>
                <Field name="username" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="nickname">닉네임</label>
                <Field name="nickname" component="input" type="text"/>
            </div>
            <div>
                <label>
                    <Field name="gender" component="input" type="radio" value="F"/>
                    여자
                </label>
                <label>
                    <Field name="gender" component="input" type="radio" value="M"/>
                    남자
                </label>
            </div>
            <div>
                <label htmlFor="phone_number">전화번호</label>
                <Field name="phone_number" component="input" type="number"/>
            </div>
            <div>
                <label htmlFor="email">이메일</label>
                <Field name="email" component="input" type="email"/>
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <Field name="password" component="input" type="password"/>
            </div>
            <div>
                <label htmlFor="pwd_chk">비밀번호 확인</label>
                <Field name="pwd_chk" component="input" type="password"/>
            </div>
            <div>
                <label htmlFor="authenticated_university_email">대학교 이메일을 적어주세요</label>
                <Field name="authenticated_university_email" component="input" type="email"/>
            </div>
            <div>
                <button type="submit">가입 완료</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'signup'
})(SignUp);
