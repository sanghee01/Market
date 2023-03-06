import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext, DetailContext } from '../App';
import WritingPage from './WritingPage';

const Edit = () => {
  const { data } = useContext(DataContext);
  const { detailData } = useContext(DetailContext);
  const [curItem, setCurItem] = useState([]);
  const curId = detailData.id;

  useEffect(() => {
    if (data) {
      const targetItem = data.find(
        (item) => parseInt(item.id) === parseInt(curId)
      );
      setCurItem(targetItem);
    }
  }, [name, data]);

  return (
    <div>{curItem && <WritingPage isEdit={true} curItem={curItem} />}</div>
  );
};

export default Edit;
