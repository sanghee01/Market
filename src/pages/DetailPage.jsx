import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { DataContext } from '../App';

const DetailPage = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);

  const item = data.find((item) => item.id === parseInt(id));

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <DetailContainer>
      <DetailItem>
      <ItemImage src={`../assets/img/${item.image}`} alt={item.title} />
        <ItemInfo>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>{item.price}원</ItemPrice>
          <ItemDescription>{item.description}</ItemDescription>
          <ItemCounter>
            <ItemCountBtn onClick={handleMinus}>
              <AiOutlineMinus />
            </ItemCountBtn>
            <ItemCount>{quantity}</ItemCount>
            <ItemCountBtn onClick={handlePlus}>
              <AiOutlinePlus />
            </ItemCountBtn>
          </ItemCounter>
          <AddBtn>장바구니에 추가</AddBtn>
        </ItemInfo>
      </DetailItem>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 600px;
  margin-top: 50px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const ItemImage = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;

const ItemInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const ItemTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ItemPrice = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ItemDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ItemCounter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemCountBtn = styled.button`
  font-size: 2rem;
  padding: 0px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const ItemCount = styled.span`
  font-size: 2rem;
  margin: 0px 20px;
`;
export default DetailPage;