import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postMessage } from './Actions';

export default function Chat(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <div className="messeges-input_container">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
      />
      <button
        onClick={() =>
          dispatch(() => postMessage({ text: input, id: props.id }))
        }
      >
        Post my message
      </button>
    </div>
  );
}
