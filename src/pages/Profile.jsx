import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DataContext, DetailContext, SignUpContext } from '../App';
import * as P from '../styles/ProfileStyles';
import * as M from '../styles/MainStyles';

const Profile = () => {
  const { data, items, setItems, isLogin } = useContext(DataContext);
  const { name, email, age } = useContext(SignUpContext);
  const { detailFilter } = useContext(DetailContext);
  const [myPost, setMyPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      const Posts = data.filter((item) => item.writer === name);
      setMyPost(Posts);
    }
  }, [name]);

  return (
    <P.Profilediv>
      <div>
        <P.ProfileTitle>나의 프로필</P.ProfileTitle>
        <P.ProfileImgDiv>
          <P.ProfileImg src={'assets/img/BasicProfile.jpg'} alt={name} />
        </P.ProfileImgDiv>

        <P.ProfileInfoDiv>
          <P.ProfileInfoType>이름</P.ProfileInfoType> <div>{name}</div>
        </P.ProfileInfoDiv>
        <P.ProfileInfoDiv>
          <P.ProfileInfoType>나이</P.ProfileInfoType> <span>{age}</span>
        </P.ProfileInfoDiv>
        <P.ProfileInfoDiv>
          <P.ProfileInfoType>이메일</P.ProfileInfoType> <span>{email}</span>
        </P.ProfileInfoDiv>
      </div>
      <P.MyPostDiv>
        <P.MyPostTitle>{name}님의 게시글</P.MyPostTitle>
        <P.MyPostHr />
        <P.MyPostItemsDiv>
          {myPost
            .map((item) => {
              const { id, title, img, price, category } = item;
              return (
                <P.MyPostItemArticle
                  key={id}
                  onClick={() => {
                    navigate('/detail'), detailFilter(item);
                  }}
                >
                  <P.MyPostItemImg src={img} alt={title} />
                  <div>
                    <header>
                      <P.MyPostItemTitle>{title}</P.MyPostItemTitle>
                    </header>
                    <h5>{price}원</h5>
                    <P.MyPostItemCategory>{category}</P.MyPostItemCategory>
                  </div>
                </P.MyPostItemArticle>
              );
            })
            .sort((a, b) => b.key - a.key)}
        </P.MyPostItemsDiv>
      </P.MyPostDiv>
      <M.NewBtnContainer>
        <M.NewLink to='/write'>
          <AiOutlinePlus />
        </M.NewLink>
      </M.NewBtnContainer>
    </P.Profilediv>
  );
};

export default Profile;
