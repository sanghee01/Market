import styled from 'styled-components';

const WritingInput = ({
  title,
  division,
  name,
  type,
  placeholder,
  onChange,
  onKeyUp,
  required,
  accept,
}) => {
  const inputUI = {
    input: (
      <WriteInput
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        accept={accept}
        onKeyUp={onKeyUp}
      />
    ),
    textarea: (
      <WriteTextarea
        name={name}
        onChange={onChange}
        placeholder="상품 설명 및 거래방법을 작성해주세요."
      ></WriteTextarea>
    ),
    select: (
      <WriteSelect name={name} onChange={onChange}>
        <option>카테고리를 선택하세요.</option>
        <option>가구</option>
        <option>도서</option>
        <option>전자기기</option>
        <option>기타</option>
      </WriteSelect>
    ),
  };

  return (
    <>
      <WriteLabel htmlFor={name}>{title}</WriteLabel>
      {inputUI[division]}
    </>
  );
};

const WriteLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #262626;
`;

const WriteSelect = styled.select`
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

const WriteInput = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #e2e0e0;
  :focus {
    outline: none !important;
    border-color: #acacac;
  }
`;

const WriteTextarea = styled.textarea`
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

export default WritingInput;
