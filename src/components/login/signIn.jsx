import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext, SignUpContext } from '../../App';
import './signIn.css';

export default function SignIn() {
  const { isLogin, setIsLogin } = useContext(DataContext);
  const { email, pwd } = useContext(SignUpContext);
  const [curEmail, setCurEmail] = useState();
  const [curPwd, setCurPwd] = useState();
  const navigate = useNavigate();

  const onLogin = () => {
    if (email === curEmail && pwd === curPwd) {
      navigate('/');
      setIsLogin(true);
    } else {
      alert('아이디 또는 패스워드가 일치하지 않습니다!');
      return;
    }
  };

  return (
    <div className="signInDIv">
      <form className="form2">
        <div className="titleWrap">
          <img src="assets/img/Logo2.png" />{' '}
        </div>
        <div className="inputBox">
          <div className="inputName">
            <label for="email">이메일</label>
          </div>
          <div className="inputField">
            <input
              className="input"
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              required
              onChange={(e) => setCurEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="inputBox">
          <div className="inputName">
            <label for="pwd">비밀번호</label>
          </div>
          <div className="inputField">
            <input
              className="input"
              type="password"
              id="pwd"
              placeholder="비밀번호를 입력하세요"
              onChange={(e) => setCurPwd(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="inputBox">
          <button className="submit" onClick={onLogin}>
            로그인
          </button>
        </div>
        <div className="movetoSignup">
          아직 회원이 아니세요?
          <span
            className="movetoSignupButton"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </span>
        </div>
      </form>
    </div>
  );
}
