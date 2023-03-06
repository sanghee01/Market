import React, { useContext } from 'react';
import { DataContext, DetailContext, SignUpContext } from '../App';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const { data, setData, isLogin } = useContext(DataContext);
  const { detailData } = useContext(DetailContext);
  const { name } = useContext(SignUpContext);

  const { title, category, price, img, desc, writer } = detailData;
  const navigate = useNavigate();

  const onDetailEdit = () => {
    navigate(`/edit`);
  };

  const onDetailDelete = () => {
    const result = confirm('정말 삭제하시겠습니까?');
    if (result) {
      alert('삭제가 완료되었습니다.');
      data.pop();
      setData([...data]);
      navigate('/');
    }
  };

  return (
    <DetailContainer>
      <DetailBox>
        <DetailInfoBox>
          <h1>{title}</h1>
          <span>작성자: {writer}</span>
          <span>카테고리: {category}</span>
          <span>가격: {price}원</span>
          <DetailImage src={img} alt={title} />
          <p>{desc}</p>
        </DetailInfoBox>

        {isLogin === true && writer === name && (
          <div>
            <DetailBtn onClick={onDetailEdit}>수정</DetailBtn>
            <DetailBtn onClick={onDetailDelete}>삭제</DetailBtn>
          </div>
        )}
      </DetailBox>
    </DetailContainer>
  );
};
const DetailContainer = styled.div`
  padding-top: 180px;
  height: 140vh;
  background-color: #fffafa;
`;
const DetailBox = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  padding: 50px;
  width: 40vw;
  margin: 0 auto;
`;

const DetailImage = styled.img`
  margin: auto;
  margin-bottom: 30px;
  width: 50%;
`;

const DetailInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailBtn = styled.button`
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
`;

export default DetailPage;
