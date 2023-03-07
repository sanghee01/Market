import React, { useContext } from 'react';
import { DataContext, DetailContext } from '../../App';
import * as M from '../../styles/MainStyles';

const MainItem = () => {
  const { items } = useContext(DataContext);
  const { detailFilter } = useContext(DetailContext);

  return (
    <M.MainItemDiv>
      <M.Itemcontainer>
        {items < 1 ? (
          <M.NoitemNotice>아이템이 없습니다</M.NoitemNotice>
        ) : (
          items
            .map((item) => {
              const { id, title, img, price, category } = item;
              return (
                <M.DetailLink key={id} to='/detail'>
                  <M.ItemArticle
                    key={id}
                    onClick={() => {
                      detailFilter(item);
                    }}
                  >
                    <M.ItemImg src={img} alt={title} />
                    <div>
                      <header>
                        <p>{title}</p>
                      </header>
                      <h4>{price}원</h4>
                      <M.Category>{category}</M.Category>
                    </div>
                  </M.ItemArticle>
                </M.DetailLink>
              );
            })
            .sort((a, b) => b.key - a.key)
        )}
      </M.Itemcontainer>
    </M.MainItemDiv>
  );
};

export default MainItem;
