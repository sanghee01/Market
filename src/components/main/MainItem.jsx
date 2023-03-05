import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext, DetailContext } from '../../App';
import { Link } from 'react-router-dom';

const MainItem = () => {
  const { items } = useContext(DataContext);
  const { detailData, setDetailData, detailFilter } = useContext(DetailContext);

  return (
    <MainItemDiv>
      <Itemcontainer>
        {items < 1 ? (
          <NoitemNotice>아이템이 없습니다</NoitemNotice>
        ) : (
          items
            .map((item) => {
              const { id, title, img, price, category } = item;
              return (
                <DetailLink key={id} to="/detail">
                  <ItemArticle
                    key={id}
                    onClick={() => {
                      detailFilter(item);
                    }}
                  >
                    <ItemImg src={img} alt={title} />
                    <div>
                      <header>
                        <p>{title}</p>
                      </header>
                      <h4>{price}원</h4>
                      <Category>{category}</Category>
                    </div>
                  </ItemArticle>
                </DetailLink>
              );
            })
            .sort((a, b) => b.key - a.key)
        )}
      </Itemcontainer>
    </MainItemDiv>
  );
};

const MainItemDiv = styled.div`
  min-height: 100vh;
`;

const Itemcontainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px 30px;
  justify-items: center;
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

const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ItemImg = styled.img`
  background-size: contain;
  height: 280px;
  width: 300px;
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
