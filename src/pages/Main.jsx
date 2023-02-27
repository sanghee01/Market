import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/main/Nav';
import { AiOutlinePlus } from 'react-icons/ai';
import { itemData } from '../data';
import MainItem from './MainItem';

const allCategories = [
  '전체보기',
  ...new Set(itemData.map((item) => item.category)),
];

const Main = () => {
  const [items, setItems] = useState(itemData);
  const sortId = items.sort((a, b) => b.id - a.id);

  const filterItem = (category) => {
    if (category === '전체보기') {
      setItems(itemData);
    } else {
      setItems(itemData.filter((item) => item.category === category));
    }
  };
  const onSearch = (text) => {
    setItems(
      itemData.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div>
      <MainContainer>
        <Nav
          categories={allCategories}
          filterItem={filterItem}
          onSearch={onSearch}
        />
        <NewBtnContainer>
          <NewBtn>
            <AiOutlinePlus /> 내 상품 등록하기
          </NewBtn>
        </NewBtnContainer>
        <MainItem items={items} />
      </MainContainer>
      <Footer>
        Copyright 2023. JSCODE Team Project - Market. All rights reserved.
      </Footer>
    </div>
  );
};
const MainContainer = styled.div`
  background-color: #fffafa;
  padding-top: 80px;
`;

const NewBtnContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 15px;
  padding-right: 200px;
`;

const NewBtn = styled.button`
  background-color: #00b493;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Footer = styled.footer`
  display: flex;
  height: 80px;
  border-top: 1px solid #ececec;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;
export default Main;
