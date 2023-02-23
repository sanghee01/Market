import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ categories, filterItem, onSearch }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

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
    navigate("/");
  }, [filterItem, navigate]);

  return (
    <NavBar>
      <NavHeader>
        <Logo src="assets/img/logo.png" alt="logo" onClick={onMain} />
        <NavBtnWrap>
          {categories.map((category, index) => {
            return (
              <NavBtn onClick={() => filterItem(category)} key={index}>
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
          <span>OO님 환영합니다</span>
        </div>
        <div>
          <button>로그아웃</button>
        </div>
      </NavHeader>
    </NavBar>
  );
};
const NavBar = styled.nav`
  background-color: white;
  box-shadow: 0 0 6px gray;
`;
const NavHeader = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 120px;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const NavBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const NavBtn = styled.div`
  color: #4b4b4b;
  font-size: 1.3rem;
  text-transform: capitalize;
  display: block;
  padding: 0 1rem;
  transition: all 0.2s linear;
  cursor: pointer;
  font-weight: bold;
`;
const NavInput = styled.input`
  width: 230px;
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
`;
export default Nav;
