import React from 'react';

const Login = () => {
  return (
    <div>
      <div>
        {/* <img src="/" alt="사장님 비서ya 로고" /> */}
        <h1>사장님 비서ya</h1>
        <h1>통합 로그인</h1>
      </div>
      <div>
        <input
          type="email"
          placeholder="이메일 입력"
        />
        <input
          type="password"
          placeholder="비밀번호 입력"
        />
        <button>로그인</button>
        <a href="/register">회원가입</a>
      </div>
    </div>
  );
};

export default Login;
