import React from 'react';
import MessageCard from '../components/chat/MessageCard';
import { useSelector, useDispatch } from 'react-redux';
import ChatInput from '../components/chat/ChatInput';
import { getChat } from '../components/chat/Actions';
import '../components/chat/Chat.css';

export default function ChatList(props) {
  const dispatch = useDispatch();

  const chat = useSelector(
    state =>
      state.chatReducer.chats &&
      state.chatReducer.chats.find(c => c._id === props.match.params.id)
  );

  if (chat === undefined) {
    dispatch(() => getChat(props.match.params.id));
    return <div>Loading</div>;
  }

  const listItems = chat.messages.map(listItem => {
    return <MessageCard name={listItem.text} key={listItem._id} />;
  });
  return (
    <div className="chat-list_container">
      <ul>{listItems}</ul>
      <ChatInput id={props.match.params.id} />
    </div>
  );
}
