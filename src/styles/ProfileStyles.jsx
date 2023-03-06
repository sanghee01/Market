import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Profilediv = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

export const ProfileTitle = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.3rem;
`;

export const ProfileImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 150px;
`;

export const ProfileInfoDiv = styled.div`
  margin: 0 auto;
  display: flex;
  width: 300px;
  margin-top: 40px;
`;

export const ProfileInfoType = styled.p`
  font-weight: bold;
  width: 150px;
`;

export const MyPostDiv = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
`;

export const MyPostTitle = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 10px;
  padding-left: 270px;
`;

export const MyPostHr = styled.hr`
  width: 1000px;
  margin: 0 auto;
`;

export const MyPostItemsDiv = styled.div`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 50px;
  padding-left: 50px;
  gap: 0 50px;
`;

export const MyPostItemArticle = styled.article`
  cursor: pointer;
  width: 200px;
  margin-bottom: 50px;
`;

export const MyPostItemImg = styled.img`
  background-size: contain;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;

  border: 2px solid #ececec;
`;

export const MyPostItemTitle = styled.p`
  font-size: 14px;
`;

export const MyPostItemCategory = styled.p`
  font-size: 13px;
  color: #545353;
`;
