import React from 'react';
import MessageCard from '../components/chat/MessageCard';
import { useSelector, useDispatch } from 'react-redux';
import ChatInput from '../components/chat/ChatInput';
import { getMessages } from '../components/chat/Actions';

export default function ChatList(props) {
  const dispatch = useDispatch();

  const messages = useSelector(state => state.messages);

  if (messages === undefined) {
    dispatch(() => getMessages(props.match.params.id));
    return <div>Loading</div>;
  }

  const listItems = messages
    ? messages.map(listItem => {
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
