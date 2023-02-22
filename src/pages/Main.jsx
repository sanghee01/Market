import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { itemData } from "../data";

const allCategories = [
  "전체보기",
  ...new Set(itemData.map((item) => item.category)),
];

const Main = () => {
  const [items, setItems] = useState(itemData);
  const filterItem = (category) => {
    if (category === "전체보기") {
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
    <MainContainer>
      <Nav
        categories={allCategories}
        filterItem={filterItem}
        onSearch={onSearch}
      />
      <Itemcontainer>
        {items.map((item) => {
          const { id, title, img, desc, price, category } = item;
          return (
            <article key={id}>
              <ItemImg src={img} alt={title} />
              <div>
                <header>
                  <h4>{title}</h4>
                </header>
                <h4>{price}</h4>
                <p>{category}</p>
              </div>
            </article>
          );
        })}
      </Itemcontainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  background-color: #fffafa;
`;

const Itemcontainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px 30px;
  justify-items: center;
`;

const ItemImg = styled.img`
  height: 280px;
  width: 100%;
  border-radius: 10px;
  display: block;
`;
export default Main;
