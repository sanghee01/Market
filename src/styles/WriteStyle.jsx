import styled from 'styled-components';

// WritingPage
export const WriteContainer = styled.div`
  height: 140vh;
  width: 40vw;
  margin: 0 auto;
  margin-top: 170px;
`;

export const WriteImgBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriteImg = styled.img`
  margin: 30px;
  height: 30%;
  width: 30%;
`;
export const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const WriteSubmitBtn = styled.button`
  cursor: pointer;
  margin-top: 30px;
  padding: 14px;
  background-color: #ff8a3d;
  border-radius: 30px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: white;
  :hover {
    background-color: #ff8b3dcf;
  }
  :disabled {
    background-color: lightgray;
  }
  transition: all 0.2s;
`;

// WritingInput
export const WriteLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #262626;
`;

export const WriteSelect = styled.select`
  border-radius: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #e2e0e0;
  color: #454040c3;
  :focus {
    outline: none !important;
    border-color: #acacac;
  }
`;

export const WriteInput = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #e2e0e0;
  :focus {
    outline: none !important;
    border-color: #acacac;
  }
`;

export const WriteTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  resize: none;
  border-radius: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #e2e0e0;
  :focus {
    outline: none !important;
    border-color: #acacac;
  }
`;
