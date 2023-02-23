const WritingInput = ({
  title,
  division,
  name,
  type,
  placeholder,
  required,
}) => {
  const inputUI = {
    input: (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    ),
    textarea: <textarea></textarea>,
    select: (
      <select name={name}>
        <option>가구</option>
        <option>도서</option>
        <option>전자기기</option>
      </select>
    ),
  };

  return (
    <>
      <label htmlFor={name}>{title}</label>
      {inputUI[division]}
    </>
  );
};

export default WritingInput;
