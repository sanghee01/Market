import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyle from './styles/GlobalStyles';
import Nav from './components/common/Nav';
import WritingPages from './pages/WritingPage';
import DetailPage from './pages/DetailPage';
import SignIn from './components/login/signIn';
import SignUp from './components/signup/signUp';
import styled from 'styled-components';
import Footer from './components/common/Footer';
import Profile from './pages/Profile';
import Edit from './pages/Edit';

export const DataContext = createContext();
export const SignUpContext = createContext();
export const DetailContext = createContext();

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: '아이폰 레드',
      category: '전자기기',
      price: '120,000',
      img: 'assets/img/image01.jpg',
      desc: '올해 샀구 한번도 안뜯은 멀쩡한 아이폰 팜',
      writer: '홍길동',
    },
    {
      id: 2,
      title: '그냥 소파',
      category: '가구',
      price: '1,000',
      img: 'assets/img/image02.jpg',
      desc: '사가세요',
      writer: '홍길동',
    },
    {
      id: 3,
      title: '드르렁',
      category: '도서',
      price: '2,000',
      img: 'assets/img/image03.jpg',
      desc: '드르렁 책입니다',
      writer: '홍길동',
    },
    {
      id: 4,
      title: '맥북입니다',
      category: '전자기기',
      price: '50,000',
      img: 'assets/img/image04.jpg',
      desc: '싸게 처분함',
      writer: '홍길동',
    },
    {
      id: 5,
      title: '자전거 팔아요',
      category: '기타',
      price: '5,000',
      img: 'assets/img/image05.jpg',
      desc: '팝니다 댓글주세요',
      writer: '이길동',
    },
  ]);

  const allCategories = [
    { id: 1, text: '전체보기' },
    { id: 2, text: '전자기기' },
    { id: 3, text: '가구' },
    { id: 4, text: '도서' },
    { id: 5, text: '기타' },
  ];

  const [items, setItems] = useState(data);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdc, setPwdc] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    setItems(data);
  }, [data]);

  const filterItem = (category) => {
    if (category === '전체보기') {
      setItems(data);
    } else {
      setItems(data.filter((item) => item.category === category));
    }
  };

  const onSearch = (text) => {
    setItems(
      data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const onEdit = (
    targetId,
    editTitle,
    editCategory,
    editPrice,
    editImg,
    editDesc
  ) => {
    setData(
      data.map((item) =>
        item.id === targetId
          ? {
              ...item,
              title: editTitle,
              category: editCategory,
              price: editPrice,
              img: editImg,
              desc: editDesc,
            }
          : item
      )
    );
  };

  const [detailData, setDetailData] = useState({
    id: null,
    title: '',
    category: '',
    price: '',
    img: '',
    desc: '',
    writer: '',
  });

  const detailFilter = (item) => {
    setDetailData({
      id: item.id,
      title: item.title,
      category: item.category,
      price: item.price,
      img: item.img,
      desc: item.desc,
      writer: item.writer,
    });
  };
  return (
    <div>
      <GlobalStyle />
      <DataContext.Provider
        value={{
          data,
          setData,
          filterItem,
          items,
          setItems,
          isLogin,
          setIsLogin,
          allCategories,
          onSearch,
          onEdit,
        }}
      >
        <SignUpContext.Provider
          value={{
            email,
            setEmail,
            pwd,
            setPwd,
            pwdc,
            setPwdc,
            name,
            setName,
            age,
            setAge,
          }}
        >
          <DetailContext.Provider
            value={{ detailData, setDetailData, detailFilter }}
          >
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path='/write' element={<WritingPages />} />
                <Route exact path='/login' element={<SignIn />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/detail' element={<DetailPage />} />
                <Route exact path='/edit' element={<Edit />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </DetailContext.Provider>
        </SignUpContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
