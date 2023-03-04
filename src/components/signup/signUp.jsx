import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext, SignUpContext } from '../../App';
import './signUp.css';

export default function SignUp() {
  const {
    email,
    setEmail,
    pwd,
    setPwd,
    pwdc,
    setPwdc,
    name,
    setName,
    age,
    setAge,
  } = useContext(SignUpContext);

  const navigate = useNavigate();

  const [isPasswordMatch, setIsPasswordMatch] = useState('');
  useEffect(() => {
    if (pwdc && pwd !== pwdc) {
      setIsPasswordMatch('비밀번호가 일치하지 않습니다');
    } else {
      setIsPasswordMatch('');
    }
  }, [pwd, pwdc]);

  const [isNotCorrect, setIsNotCorrect] = useState(true);
  useEffect(() => {
    if (!isPasswordMatch && email && pwd && pwdc && name) {
      setIsNotCorrect(false);
    } else {
      setIsNotCorrect(true);
    }
  }, [isPasswordMatch, email, pwd, pwdc, name]);

  const onSignupSubmit = (e) => {
    e.preventDefault();
    navigate('/login', { replace: true });
  };

  return (
    <div className="signUpDIv">
      <form className="form1" onSubmit={onSignupSubmit}>
        <div className="titleWrap">회원가입</div>
        <div className="inputBox">
          <div className="inputName">
            <label for="email">
              이메일<span className="required">*</span>
            </label>
          </div>
          <div className="inputField">
            <input
              className="input"
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="inputBox">
          <div className="inputName">
            <label for="pwd">
              비밀번호<span className="required">*</span>
            </label>
          </div>
          <div className="inputField">
            <input
              className="input"
              type="password"
              id="pwd"
              placeholder="비밀번호를 입력하세요"
              required
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
        </div>
        <div className="inputBox">
          <div className="inputName">
            <label for="pwdc">
              비밀번호 확인<span className="required">*</span>
            </label>
          </div>
          <div className="inputField">
            <input
              className="input"
              type="password"
              id="pwdc"
              placeholder="비밀번호를 다시 입력하세요"
              required
              onChange={(e) => setPwdc(e.target.value)}
            />
          </div>
          <div id="PasswordNotMatch">{isPasswordMatch}</div>
        </div>
        <div className="inputBox">
          <div className="inputName">
            <label for="name">
              이름<span className="required">*</span>
            </label>
          </div>
          <div className="inputField">
            <input
              className="input"
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="inputBox">
          <div className="inputName">
            <label for="age">나이</label>
          </div>
          <div className="inputField">
            <input
              className="input"
              type="number"
              id="age"
              placeholder="나이를 입력하세요"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="inputBox">
          <button className="submit" disabled={isNotCorrect}>
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
