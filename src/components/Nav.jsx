import React, { useState } from "react";
import styled from "styled-components";
const Nav = ({ categories, filterItem, onSearch }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
    setText("");
  };

  return (
    <NavBar>
      <NavHeader>
        <Logo src="assets/img/logo.png" alt="logo" />
        <NavBtnWrap>
          {categories.map((category, index) => {
            return (
              <NavBtn onClick={() => filterItem(category)} key={index}>
                {category}
              </NavBtn>
            );
          })}
        </NavBtnWrap>
        <form onSubmit={onSubmit}>
          <NavInput
            type="text"
            value={text}
            placeholder={"물품을 검색해보세요ㅇㅅㅇ"}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">검색</button>
        </form>
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
  padding: 1rem 200px;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavBtnWrap = styled.div`
  display: flex;

  align-items: center;
`;

const NavBtn = styled.div`
  color: #4b4b4b;
  font-size: 1.1rem;
  text-transform: capitalize;
  display: block;
  padding: 0 1rem;
  transition: all 0.2s linear;
  cursor: pointer;
  font-weight: bold;
`;

const NavInput = styled.input`
  width: 250px;
`;

export default Nav;
