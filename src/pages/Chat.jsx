import React from 'react';
import ListItem from '../components/chat/ListItem';
import ChatCreatePlaceholder from '../components/chat/ChatCreatePlaceholder';
import { useSelector, useDispatch } from 'react-redux';
import { getChats } from '../components/chat/Actions';

export default function ChatList() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chatReducer.chats);

  dispatch(getChats);

  if (chats === undefined) {
    return <div>Loading</div>;
  }

  if (chats.length === 0) {
    return <ChatCreatePlaceholder />;
  }

  const listItems = chats.map(listItem => {
    return <ListItem name={listItem.name} key={listItem.id} />;
  });

  return <ul>{listItems}</ul>;
}
