import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createChat } from "./Actions";

export default function ChatList(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
      />
      <button onClick={() => dispatch(() => createChat(input))}>
        Create chat
      </button>
    </div>
  );
}
