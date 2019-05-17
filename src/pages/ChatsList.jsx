import React from 'react';
import ChatCard from '../components/chat/ChatCard';
import '../components/chat/Chat.css';
import ChatCreatePlaceholder from '../components/chat/ChatCreatePlaceholder';
import { useSelector, useDispatch } from 'react-redux';
import { getChats } from '../components/chat/Actions';

export default function ChatList(props) {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chatReducer.chats);

  if (chats === undefined) {
    dispatch(getChats);
    return <div>Loading</div>;
  }

  if (chats.length === 0) {
    return <ChatCreatePlaceholder />;
  }

  const rederectToMessages = function(id) {
    props.history.push(`chat/${id}/messages`);
  };

  const listItems = chats.map(listItem => {
    return (
      <ChatCard
        name={listItem.name}
        key={listItem._id}
        id={listItem._id}
        clickHandler={() => rederectToMessages(listItem._id)}
      />
    );
  });

  return <div className="chat-list_container">{listItems}</div>;
}
