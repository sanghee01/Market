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
  const [categories, setCategories] = useState(allCategories);

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
    <div>
      <Nav
        categories={allCategories}
        filterItem={filterItem}
        onSearch={onSearch}
      />
      <div>
        {items.map((item) => {
          const { id, title, img, desc, price, category } = item;
          return (
            <article key={id}>
              <ItemImg src={img} alt={title} />
              <div>
                <header>
                  <h4>{title}</h4>
                  <h4>{price}</h4>
                </header>
                <p>{category}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

const ItemImg = styled.img`
  height: 200px;
  width: 300px;

  display: block;
`;

export default Main;
