import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Main

export const MainContainer = styled.div`
  background-color: #fffafa;
  padding-top: 80px;
  padding-bottom: 30px;
`;

export const NewBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 40px;
`;

export const NewLink = styled(Link)`
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

// MaiItem

export const MainItemDiv = styled.div`
  min-height: 100vh;
`;

export const Itemcontainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px 30px;
  justify-items: center;
`;

export const NoitemNotice = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  color: gray;
  margin-top: 150px;
  font-size: 1.4rem;
`;

export const ItemArticle = styled.article`
  cursor: pointer;
  height: 400px;
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ItemImg = styled.img`
  background-size: contain;
  height: 280px;
  width: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
  display: block;
  border: 2px solid #ececec;
`;

export const Category = styled.p`
  font-size: 0.9rem;
  color: #545353;
`;

// Nav

export const NavBar = styled.nav`
  background-color: white;
  box-shadow: 0 0 6px gray;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
export const NavHeader = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 50px;
  height: 70px;
`;

export const Logo = styled.img`
  width: 150px;
  height: 60px;
  cursor: pointer;
  margin-left: 100px;
`;

export const NavBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.div`
  color: #4d4d4d;
  font-size: 1.3rem;
  text-transform: capitalize;
  display: block;
  padding: 0 1rem;
  transition: all 0.1s linear;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #8c8c8c;
  }

  &.active_btn {
    color: #ff7e36;
    :hover: none;
  }
`;

export const NavInput = styled.input`
  width: 280px;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding-left: 20px;
  margin-left: 50px;
  margin-right: 10px;
  background-color: #f1f2f2;
  :focus {
    outline: none;
  }
`;

export const NavInputBtn = styled.button`
  background-color: white;
  width: 80px;
  height: 40px;
  border: 0.1px solid lightgray;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #f1f2f2;
  }
`;

export const NavLogOutBtnWrap = styled.div`
  display: grid;
  width: 140px;
`;

export const WelcomeText = styled.span`
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;

export const ProfileLink = styled(Link)`
  font-size: 14px;
  color: black;
  text-decoration: none;
  font-weight: bold;
`;

export const NavLogoutBtn = styled.button`
  background: none;
  width: 80px;
  font-size: 13px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  color: gray;
`;

export const NavLoginBtnWrap = styled.div`
  width: 140px;
`;

export const NavLoginLink = styled(Link)`
  background: none;
  color: black;
  border: none;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 15px;
`;

export const NavSignUpLink = styled(Link)`
  background: none;
  border: none;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

// Footer

export const FooterDiv = styled.footer`
  text-align: center;
  padding-top: 20px;
  height: 80px;
  border-top: 1px solid #ececec;
  font-size: 0.8rem;
`;
