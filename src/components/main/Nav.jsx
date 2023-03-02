import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../../App";

const Nav = ({ categories, onSearch }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [btnIndex, setBtnIndex] = useState(0);

  const { filterItem, isLogin, setIsLogin } = useContext(DataContext);

  const onSearchItem = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(text);
      setText("");
    },
    [onSearch, text]
  );

  const onMain = useCallback(() => {
    filterItem("전체보기");
    setBtnIndex(0);
    navigate("/");
  }, [filterItem, navigate]);

  const onToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <NavBar>
      <NavHeader>
        <Logo src="assets/img/Logo1.jpg" alt="logo" onClick={onMain} />
        <NavBtnWrap>
          {categories.map((category, index) => {
            return (
              <NavBtn
                onClick={() => {
                  filterItem(category);
                  setBtnIndex(index);
                }}
                key={index}
                className={btnIndex === index && "active_btn"}
              >
                {category}
              </NavBtn>
            );
          })}
        </NavBtnWrap>

        <form onSubmit={onSearchItem}>
          <NavInput
            type="text"
            value={text}
            placeholder={"물품을 검색해보세요"}
            onChange={(e) => setText(e.target.value)}
          />
          <NavInputBtn type="submit">검색하기</NavInputBtn>
        </form>
        <div>
          {isLogin ? (
            <NavLogOutBtnWrap>
              <span>OO님 환영합니다</span>
              <NavLogoutBtn>로그아웃</NavLogoutBtn>
            </NavLogOutBtnWrap>
          ) : (
            <NavLoginBtnWrap>
              <NavLoginBtn>로그인</NavLoginBtn>
              <NavSignUpBtn>회원가입</NavSignUpBtn>
            </NavLoginBtnWrap>
          )}
        </div>
      </NavHeader>
    </NavBar>
  );
};
const NavBar = styled.nav`
  background-color: white;
  box-shadow: 0 0 6px gray;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
const NavHeader = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 50px;
  height: 70px;
`;

const Logo = styled.img`
  height: 60px;
  cursor: pointer;
  margin-left: 100px;
`;

const NavBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const NavBtn = styled.div`
  color: #4d4d4d;
  font-size: 1.3rem;
  text-transform: capitalize;
  display: block;
  padding: 0 1rem;
  transition: all 0.1s linear;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #8c8c8c;
  }

  &.active_btn {
    color: #ff7e36;
    :hover: none;
  }
`;
const NavInput = styled.input`
  width: 280px;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding-left: 20px;
  margin-left: 50px;
  margin-right: 10px;
  background-color: #f1f2f2;
  :focus {
    outline: none;
  }
`;

const NavInputBtn = styled.button`
  background-color: white;
  width: 80px;
  height: 40px;
  border: 0.1px solid lightgray;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #f1f2f2;
  }
`;

const NavLogOutBtnWrap = styled.div`
  display: grid;
  width: 140px;
`;

const NavLogoutBtn = styled.button`
  background: none;
  width: 80px;
  font-size: 13px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  color: gray;
`;

const NavLoginBtnWrap = styled.div`
  width: 140px;
`;

const NavLoginBtn = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 10px;
`;

const NavSignUpBtn = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
export default Nav;
