import React from 'react';
import { useDispatch } from 'react-redux';

export default function Chat(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" />
      <button onClick={() => dispatch({ type: 'postMessage' })}>
        Post my message
      </button>
    </div>
  );
}
