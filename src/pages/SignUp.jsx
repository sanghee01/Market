import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpContext } from '../App';
import * as SS from '../styles/SignInUpStyles';

const SignUp = () => {
  const { email, setEmail, pwd, setPwd, pwdc, setPwdc, name, setName, setAge } =
    useContext(SignUpContext);

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
    <SS.SignInUpContainer>
      <SS.SignInUpForm style={{ height: '600px' }} onSubmit={onSignupSubmit}>
        <SS.SignUpTitle>회원가입</SS.SignUpTitle>
        <SS.SignInUpInputBox>
          <SS.SignInUpLabel htmlFor='email'>
            이메일<SS.Required>*</SS.Required>
          </SS.SignInUpLabel>
          <SS.SignInUpInput
            type='email'
            id='email'
            placeholder='이메일을 입력하세요'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </SS.SignInUpInputBox>
        <SS.SignInUpInputBox>
          <SS.SignInUpLabel htmlFor='pwd'>
            비밀번호<SS.Required>*</SS.Required>
          </SS.SignInUpLabel>
          <SS.SignInUpInput
            type='password'
            id='pwd'
            placeholder='비밀번호를 입력하세요'
            required
            onChange={(e) => setPwd(e.target.value)}
          />
        </SS.SignInUpInputBox>
        <SS.SignInUpInputBox>
          <SS.SignInUpLabel htmlFor='pwdc'>
            비밀번호 확인<SS.Required>*</SS.Required>
          </SS.SignInUpLabel>
          <SS.SignInUpInput
            type='password'
            id='pwdc'
            placeholder='비밀번호를 다시 입력하세요'
            required
            onChange={(e) => setPwdc(e.target.value)}
          />
        </SS.SignInUpInputBox>
        <SS.PasswordNotMatch>{isPasswordMatch}</SS.PasswordNotMatch>
        <SS.SignInUpInputBox>
          <SS.SignInUpLabel htmlFor='name'>
            이름<SS.Required>*</SS.Required>
          </SS.SignInUpLabel>
          <SS.SignInUpInput
            type='text'
            id='name'
            placeholder='이름을 입력하세요'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </SS.SignInUpInputBox>
        <SS.SignInUpInputBox>
          <SS.SignInUpLabel htmlFor='age'>나이</SS.SignInUpLabel>
          <SS.SignInUpInput
            type='number'
            id='age'
            placeholder='나이를 입력하세요'
            onChange={(e) => setAge(e.target.value)}
          />
        </SS.SignInUpInputBox>
        <SS.SignInUpSubmit disabled={isNotCorrect}>가입하기</SS.SignInUpSubmit>
      </SS.SignInUpForm>
    </SS.SignInUpContainer>
  );
};

export default SignUp;
