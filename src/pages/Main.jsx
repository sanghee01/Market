import React, { useContext } from 'react';
import { DataContext } from '../App';
import { AiOutlinePlus } from 'react-icons/ai';
import MainItem from '../components/main/MainItem';
import * as M from '../styles/MainStyles';

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
