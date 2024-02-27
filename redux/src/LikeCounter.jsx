import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, decrementLike } from './Actions';

const LikeCounter = () => {
  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.likeCount);

  const handleIncrement = () => {
    dispatch(incrementLike());
  };

  const handleDecrement = () => {
    if (likeCount > 0) {
      dispatch(decrementLike());
    }
  };

  return (
    <div>
      <h1>Like Counter: {likeCount}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;