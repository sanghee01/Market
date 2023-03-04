import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext, SignUpContext } from '../App';

const Profile = () => {
  const { data, items, setItems, isLogin } = useContext(DataContext);
  const { name, email, age } = useContext(SignUpContext);
  const [myPost, setMyPost] = useState([]);

  useEffect(() => {
    if (name) {
      const Posts = items.filter((item) => item.writer === name);
      setMyPost(Posts);
    }
  }, [name]);

  return (
    <Profilediv>
      <div>
        <ProfileTitle>나의 프로필</ProfileTitle>
        <ProfileImgDiv>
          <ProfileImg src={'assets/img/BasicProfile.jpg'} alt={name} />
        </ProfileImgDiv>

        <ProfileInfoDiv>
          <ProfileInfoType>이름</ProfileInfoType> <div>{name}</div>
        </ProfileInfoDiv>
        <ProfileInfoDiv>
          <ProfileInfoType>나이</ProfileInfoType> <span>{age}</span>
        </ProfileInfoDiv>
        <ProfileInfoDiv>
          <ProfileInfoType>이메일</ProfileInfoType> <span>{email}</span>
        </ProfileInfoDiv>
      </div>
      <MyPostDiv>
        <MyPostTitle>{name}님의 게시글</MyPostTitle>
        <MyPostHr />
        <MyPostItemsDiv>
          {myPost
            .map((item) => {
              const { id, title, img, price, category } = item;
              return (
                <MyPostItemArticle key={id}>
                  <MyPostItemImg src={img} alt={title} />
                  <div>
                    <header>
                      <MyPostItemTitle>{title}</MyPostItemTitle>
                    </header>
                    <h5>{price}원</h5>
                    <MyPostItemCategory>{category}</MyPostItemCategory>
                  </div>
                </MyPostItemArticle>
              );
            })
            .sort((a, b) => b.key - a.key)}
        </MyPostItemsDiv>
      </MyPostDiv>
      <NewBtnContainer>
        <NewLink to="/write">
          <AiOutlinePlus />
        </NewLink>
      </NewBtnContainer>
    </Profilediv>
  );
};

const Profilediv = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const ProfileTitle = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.3rem;
`;

const ProfileImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 150px;
`;

const ProfileInfoDiv = styled.div`
  margin: 0 auto;
  display: flex;
  width: 300px;
  margin-top: 40px;
`;

const ProfileInfoType = styled.p`
  font-weight: bold;
  width: 150px;
`;

const MyPostDiv = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
`;

const MyPostTitle = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 10px;
  padding-left: 270px;
`;

const MyPostHr = styled.hr`
  width: 1000px;
  margin: 0 auto;
`;

const MyPostItemsDiv = styled.div`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 50px;
  padding-left: 50px;
  gap: 0 50px;
`;

const MyPostItemArticle = styled.article`
  cursor: pointer;
  width: 200px;
  margin-bottom: 50px;
`;

const MyPostItemImg = styled.img`
  background-size: contain;
  width: 200px;
  height: 220px;
  border-radius: 10px;
  margin-bottom: 10px;

  border: 2px solid #ececec;
`;

const MyPostItemTitle = styled.p`
  font-size: 14px;
`;

const MyPostItemCategory = styled.p`
  font-size: 13px;
  color: #545353;
`;

const NewBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 40px;
`;

const NewLink = styled(Link)`
  background-color: #00b493;
  padding: 15px 20px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 30px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-radius: 30px;
    width: 250px;

    ::after {
      content: ' 내 상품을 등록해보세요';
    }
  }
`;
export default Profile;
