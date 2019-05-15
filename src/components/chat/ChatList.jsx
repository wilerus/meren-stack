import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';
import ChatInput from '../components/chat/ChatInput';

export default function ChatList(props) {
  const items = useSelector(state => state.items);

  const listItems = items
    ? items.map(listItem => {
        return <ListItem name={listItem.name} key={listItem.id} />;
      })
    : [];

  return (
    <div>
      <ul>{listItems}</ul>
      <ChatInput />
    </div>
  );
}
