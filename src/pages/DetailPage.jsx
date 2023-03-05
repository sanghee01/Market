import React, { useContext } from 'react';
import { DetailContext } from '../App';
import styled from 'styled-components';

const DetailPage = () => {
  const { detailData } = useContext(DetailContext);
  const { title, category, price, img, desc, writer } = detailData;

  return (
    <DetailContainer>
      <img src={img} alt={title} />
      <div>
        <h1>{title}</h1>
        <span>{writer}</span>
        <span>{category}</span>
        <span>{price}원</span>
        <p>{desc}</p>
      </div>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  margin-top: 200px;
`;

export default DetailPage;
