import React, { useContext } from 'react';
import { DataContext } from '../App';
import styled from 'styled-components';

const MainItem = () => {
  const { data } = useContext(DataContext);

  return (
    <Itemcontainer>
      {data < 1 ? (
        <NoitemNotice>아이템이 없습니다</NoitemNotice>
      ) : (
        data
          .map((item) => {
            const { id, title, img, desc, price, category } = item;
            return (
              <ItemArticle key={id}>
                <ItemImg src={img} alt={title} />
                <div>
                  <header>
                    <p>{title}</p>
                  </header>
                  <h4>{price}원</h4>
                  <Category>{category}</Category>
                </div>
              </ItemArticle>
            );
          })
          .sort((a, b) => b.key - a.key)
      )}
    </Itemcontainer>
  );
};

const Itemcontainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px 30px;
  justify-data: center;
  min-height: 100vh;
`;

const NoitemNotice = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  color: gray;
  margin-top: 150px;
  font-size: 1.4rem;
`;

const ItemArticle = styled.article`
  cursor: pointer;
  height: 400px;
`;

const ItemImg = styled.img`
  height: 280px;
  width: 300px;
  background-size: contain;
  border-radius: 10px;
  margin-bottom: 10px;
  display: block;
  border: 2px solid #ececec;
`;

const Category = styled.p`
  font-size: 0.9rem;
  color: #545353;
`;

export default MainItem;
