import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext, SignUpContext } from '../App';
import * as SS from '../styles/SignInUpStyles';

const SignIn = () => {
  const { setIsLogin } = useContext(DataContext);
  const { email, pwd } = useContext(SignUpContext);
  const [curEmail, setCurEmail] = useState();
  const [curPwd, setCurPwd] = useState();
  const navigate = useNavigate();

  const onLogin = (e) => {
    if (email === curEmail && pwd === curPwd) {
      navigate('/');
      setIsLogin(true);
    } else {
      e.preventDefault();
      alert('아이디 또는 패스워드가 일치하지 않습니다!');
      return;
    }
  };

  return (
    <SS.SignInUpContainer>
      <SS.SignInUpForm onSubmit={onLogin}>
        <SS.SignInImg src='assets/img/Logo1.jpg' />
        <SS.SignInUpInputBox>
          <SS.SignInUpLabel htmlFor='email'>아이디</SS.SignInUpLabel>
          <SS.SignInUpInput
            type='email'
            id='email'
            placeholder='이메일을 입력하세요'
            required
            onChange={(e) => setCurEmail(e.target.value)}
          />
        </SS.SignInUpInputBox>
        <SS.SignInUpInputBox>
          <SS.SignInUpLabel htmlFor='pwd'>비밀번호</SS.SignInUpLabel>
          <SS.SignInUpInput
            type='password'
            id='pwd'
            placeholder='비밀번호를 입력하세요'
            onChange={(e) => setCurPwd(e.target.value)}
            required
          />
        </SS.SignInUpInputBox>
        <SS.SignInUpSubmit>로그인</SS.SignInUpSubmit>
        <SS.MoveToSignUp>
          아직 회원이 아니세요?
          <SS.MoveToSignUpBtn onClick={() => navigate('/signup')}>
          {/* 해당 기능은 react-router-dom Link 태그를 사용해보면 좋겠네요! */}
            회원가입
          </SS.MoveToSignUpBtn>
        </SS.MoveToSignUp>
      </SS.SignInUpForm>
    </SS.SignInUpContainer>
  );
};

export default SignIn;
