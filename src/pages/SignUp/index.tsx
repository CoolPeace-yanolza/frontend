import React from 'react';
import Footer from './Footer';

const SignUp = () => {
  return (
    <>
      {/* <img src="/" alt="사장님 비서ya 로고" /> */}
      <h1>사장님 비서ya</h1>
      <div>
        <h2>회원가입</h2>
        <p>야놀자가 준비한 사장님 비서ya만의 혜택을 받아보세요.</p>
        <form>
          <label htmlFor="user_name">사장님 성함</label>
          <input
            type="text"
            id="user_name"
            // placeholder=''
            required
          />
          <div>
            <label htmlFor="user_email">이메일</label>
            <input
              type="email"
              id="user_email"
              placeholder="이메일 입력"
              required
            />
            <button>중복확인</button>
          </div>
          <label htmlFor="user_password">비밀번호</label>
          <input
            type="password"
            id="user_password"
            placeholder="8-20자, 영문/숫자/특수문자 조합"
            required
          />
          <label htmlFor="user_password_confirm">비밀번호 확인</label>
          <input
            type="password"
            id="user_password_confirm"
            placeholder="다시 한번 입력해주세요."
            required
          />
          <button>회원가입</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
