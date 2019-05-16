import React from 'react';
import MessageCard from './MessageCard';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';

export default function ChatList(props) {
  const items = useSelector(state => state.items);

  const listItems = items
    ? items.map(listItem => {
        return <MessageCard name={listItem.name} key={listItem.id} />;
      })
    : [];

  return (
    <div>
      <ul>{listItems}</ul>
      <ChatInput />
    </div>
  );
}
