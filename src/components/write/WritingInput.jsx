import * as writeStyle from '../../styles/WriteStyle';

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
  value,
}) => {
  const inputUI = {
    input: (
      <writeStyle.WriteInput
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        accept={accept}
        onKeyUp={onKeyUp}
        value={value}
      />
    ),
    textarea: (
      <writeStyle.WriteTextarea
        name={name}
        onChange={onChange}
        placeholder='상품 설명 및 거래방법을 작성해주세요.'
        value={value}
      ></writeStyle.WriteTextarea>
    ),
    select: (
      <writeStyle.WriteSelect name={name} onChange={onChange} value={value}>
        <option>카테고리를 선택하세요.</option>
        <option>가구</option>
        <option>도서</option>
        <option>전자기기</option>
        <option>기타</option>
      </writeStyle.WriteSelect>
    ),
  };

  return (
    <>
      <writeStyle.WriteLabel htmlFor={name}>{title}</writeStyle.WriteLabel>
      {inputUI[division]}
    </>
  );
};

export default WritingInput;
