import WritingInput from "../components/WritingInput";
import { RxCross1 } from "react-icons/rx";

const WritingPage = () => {
  return (
    <>
      <header>
        <RxCross1 />
        <h3>내 물건 팔기</h3>
        <button>임시 저장</button>
      </header>
      <form>
        <WritingInput
          title="이미지"
          division="input"
          name="image"
          type="file"
          required
        />
        <WritingInput
          title="제목"
          division="input"
          name="title"
          type="text"
          placeholder="제목"
          required
        />
        <WritingInput
          title="카테고리"
          division="select"
          name="catecory"
          required
        />
        <WritingInput
          title="가격"
          division="input"
          name="price"
          type="number"
          placeholder="￦가격"
          required
        />
        <WritingInput
          title="자세한 설명"
          division="textarea"
          name="info"
          required
          textarea
        />
        <button>작성완료</button>
      </form>
    </>
  );
};

export default WritingPage;
