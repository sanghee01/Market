import React, { useContext, useState } from 'react';
import styled from 'styled-components';
// import Nav from '../components/main/Nav';
import { DataContext } from '../App';
import { AiOutlinePlus } from 'react-icons/ai';
import MainItem from './MainItem';
import { useNavigate } from 'react-router-dom';

const Main = ({ items }) => {
  const { data } = useContext(DataContext);

  const navigate = useNavigate();

  return (
    <div>
      <MainContainer>
        <MainItem items={items} />

        <NewBtnContainer>
          <NewBtn onClick={() => navigate('/write')}>
            <AiOutlinePlus />
          </NewBtn>
        </NewBtnContainer>
      </MainContainer>
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
  bottom: 40px;
`;

const NewBtn = styled.button`
  background-color: #00b493;
  padding: 15px 20px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 30px;
  cursor: pointer;

  &:hover {
    border-radius: 30px;
    width: 250px;

    ::after {
      content: ' 내 상품을 등록해보세요';
    }
  }
`;

export default Main;
