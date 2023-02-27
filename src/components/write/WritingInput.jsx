import styled from "styled-components";

const WritingInput = ({
  title,
  division,
  name,
  type,
  placeholder,
  onChange,
  required,
}) => {
  const inputUI = {
    input: (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
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
      <select name={name} onChange={onChange}>
        <option>카테고리를 선택하세요.</option>
        <option>가구</option>
        <option>도서</option>
        <option>전자기기</option>
      </select>
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
`;

const WriteTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
`;

export default WritingInput;
