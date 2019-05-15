import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ChatList(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
      />
      <button onClick={() => dispatch({ type: 'createChat', name: input })}>
        Create chat
      </button>
    </div>
  );
}
