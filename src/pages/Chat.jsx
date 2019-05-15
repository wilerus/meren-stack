import React from 'react';
import ListItem from '../components/chat/ListItem';
import ChatCreatePlaceholder from '../components/chat/ChatCreatePlaceholder';
import { useSelector } from 'react-redux';

export default function ChatList(props) {
  const chats = useSelector(state => state.chats);

  if (!chats) {
    return <ChatCreatePlaceholder />;
  }
  const listItems = chats.map(listItem => {
    return <ListItem name={listItem.name} key={listItem.id} />;
  });

  return <ul>{listItems}</ul>;
}
