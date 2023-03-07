import styled from 'styled-components';

export const SignInUpContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const SignInUpForm = styled.form`
  margin-top: 200px;
  width: 100%;
  max-width: 500px;
  height: 500px;
  padding: 20px;
  left: 50%;
  background-color: #f7f7f7;
  border-radius: 20px;
`;
export const SignInImg = styled.img`
  width: 300px;
  margin: auto;
  margin-bottom: 10px;
`;

export const SignUpTitle = styled.h2`
  margin-bottom: 30px;
`;

export const SignInUpLabel = styled.label`
  font-size: 13px;
`;

export const SignInUpInputBox = styled.div`
  margin-top: 20px;
`;

export const SignInUpInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 8px;
  background-color: white;
  border-radius: 8px;

  border: 1px solid #e2e0e0;
  :focus-within {
    border: 1px solid #ff7e36;
  }
`;

export const Required = styled.span`
  margin-left: 2px;
  font-size: small;
  color: red;
`;
export const SignInUpSubmit = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  height: 40px;
  color: white;
  font-weight: 700;
  border: none;
  background-color: #ff7e36;
  border-radius: 16px;

  :disabled {
    background-color: lightgray;
  }
`;

export const MoveToSignUp = styled.div`
  color: gray;
  font-size: 12px;
  text-align: center;
  margin-top: 30px;
`;
export const MoveToSignUpBtn = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

export const PasswordNotMatch = styled.div`
  margin-left: 5px;
  font-size: 12px;
  color: red;
`;
