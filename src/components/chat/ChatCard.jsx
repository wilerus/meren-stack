import React from 'react';

export default function ChatList(props) {
  return (
    <div className="chat-list_card" onClick={props.clickHandler}>
      {props.name}
    </div>
  );
}
