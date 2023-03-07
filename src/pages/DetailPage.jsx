import React, { useContext } from 'react';
import { DataContext, DetailContext, SignUpContext } from '../App';
import { useNavigate } from 'react-router-dom';
import * as DS from '../styles/DetailStyles';

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
    <DS.DetailContainer>
      <DS.DetailBox>
        <DS.DetailInfoBox>
          <h1>{title}</h1>
          <span>작성자: {writer}</span>
          <span>카테고리: {category}</span>
          <span>가격: {price}원</span>
          <DS.DetailImage src={img} alt={title} />
          <p>{desc}</p>
        </DS.DetailInfoBox>

        {isLogin === true && writer === name && (
          <div>
            <DS.DetailBtn onClick={onDetailEdit}>수정</DS.DetailBtn>
            <DS.DetailBtn onClick={onDetailDelete}>삭제</DS.DetailBtn>
          </div>
        )}
      </DS.DetailBox>
    </DS.DetailContainer>
  );
};

export default DetailPage;
