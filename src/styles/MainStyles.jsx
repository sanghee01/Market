import styled from 'styled-components';

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
