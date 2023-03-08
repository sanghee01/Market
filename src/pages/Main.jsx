import React, { useContext } from 'react';
import { DataContext } from '../App';
import { AiOutlinePlus } from 'react-icons/ai';
import MainItem from '../components/main/MainItem';
import * as M from '../styles/MainStyles';
// 이름을 잘 짓는 것은 코드를 읽을 때 도움이 많이 됩니다. 약어인 M 보다는 의미 있는 이름을 사용해보는 것도 좋겠네요!!

const Main = () => {
  const { isLogin } = useContext(DataContext);

  return (
    <div>
      <M.MainContainer>
        <MainItem />
        <M.NewBtnContainer>
          {isLogin ? (
            <M.NewLink to='/write'>
              <AiOutlinePlus />
            </M.NewLink>
          ) : (
            <></>
          )}
        </M.NewBtnContainer>
      </M.MainContainer>
    </div>
  );
};

export default Main;
