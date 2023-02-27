import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyles";
import WritingPages from "./pages/WritingPage";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "아이폰 레드",
      category: "전자기기",
      price: "120,000",
      img: "assets/img/image01.jpg",
      desc: "올해 샀구 한번도 안뜯은 멀쩡한 아이폰 팜",
    },
    {
      id: 2,
      title: "그냥 소파",
      category: "가구",
      price: "1,000",
      img: "assets/img/image02.jpg",
      desc: "사가세요",
    },
    {
      id: 3,
      title: "송강 패딩",
      category: "의류",
      price: "300,000",
      img: "assets/img/image03.jpg",
      desc: "송강이 입었던 패딩팝니다",
    },
    {
      id: 4,
      title: "맥북입니다",
      category: "전자기기",
      price: "50,000",
      img: "assets/img/image04.jpg",
      desc: "싸게 처분함",
    },
    {
      id: 5,
      title: "자전거 팔아요",
      category: "기타",
      price: "5,000",
      img: "assets/img/image05.jpg",
      desc: "팝니다 댓글주세요",
    },
  ]);

  return (
    <div>
      <GlobalStyle />
      <DataContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/write" element={<WritingPages />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}
export default App;
