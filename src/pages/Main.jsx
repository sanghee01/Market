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
        <MainItem items={items} />
        <NewBtnContainer>
          <NewBtn>
            <AiOutlinePlus />
          </NewBtn>
        </NewBtnContainer>
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
  padding-bottom: 30px;
`;

const NewBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 30px;
`;

const NewBtn = styled.button`
  background-color: #00b493;
  padding: 15px 20px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 30px;
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
