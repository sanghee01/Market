import React from 'react';
import styled from 'styled-components';

const MainItem = ({ items }) => {
  return (
    <Itemcontainer>
      {items.map((item) => {
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
      })}
    </Itemcontainer>
  );
};

const Itemcontainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px 30px;
  justify-items: center;
`;

const ItemArticle = styled.article`
  cursor: pointer;
`;

const ItemImg = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  display: block;
  border: 2px solid #ececec;
`;

const Category = styled.p`
  font-size: 0.9rem;
  color: gray;
`;

export default MainItem;
