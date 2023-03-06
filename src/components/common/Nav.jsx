import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext, SignUpContext } from '../../App';
import * as M from '../../styles/MainStyles';

const Nav = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [btnIndex, setBtnIndex] = useState(1);

  const { filterItem, isLogin, setIsLogin, allCategories, onSearch } =
    useContext(DataContext);
  const { name } = useContext(SignUpContext);

  const onSearchItem = (e) => {
    e.preventDefault();
    onSearch(text);
    setText('');
  };

  const onMain = () => {
    filterItem('전체보기');
    setBtnIndex(1);
    navigate('/');
  };

  const onToggle = () => {
    setIsLogin(!isLogin);
    navigate('/');
  };

  return (
    <M.NavBar>
      <M.NavHeader>
        <M.Logo src='assets/img/Logo1.jpg' alt='logo' onClick={onMain} />
        <M.NavBtnWrap>
          {allCategories.map((category) => {
            return (
              <M.NavBtn
                onClick={() => {
                  filterItem(category.text);
                  setBtnIndex(category.id);
                }}
                key={category.id}
                className={btnIndex === category.id && 'active_btn'}
              >
                {category.text}
              </M.NavBtn>
            );
          })}
        </M.NavBtnWrap>

        <form onSubmit={onSearchItem}>
          <M.NavInput
            type='text'
            value={text}
            placeholder={'물품을 검색해보세요'}
            onChange={(e) => setText(e.target.value)}
          />
          <M.NavInputBtn type='submit'>검색하기</M.NavInputBtn>
        </form>
        <div>
          {isLogin ? (
            <M.NavLogOutBtnWrap>
              <M.WelcomeText>
                <M.ProfileLink to='/profile'>{name}</M.ProfileLink>님 환영합니다
              </M.WelcomeText>
              <M.NavLogoutBtn onClick={onToggle}>로그아웃</M.NavLogoutBtn>
            </M.NavLogOutBtnWrap>
          ) : (
            <M.NavLoginBtnWrap>
              <M.NavLoginLink to='/login'>로그인</M.NavLoginLink>
              <M.NavSignUpLink to='/signup'>회원가입</M.NavSignUpLink>
            </M.NavLoginBtnWrap>
          )}
        </div>
      </M.NavHeader>
    </M.NavBar>
  );
};

export default Nav;
