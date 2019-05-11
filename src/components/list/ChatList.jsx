import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

export default function ChatList(props) {
  const items = useSelector(state => state.items);

  const listItems = items
    ? items.map(listItem => {
        return <ListItem name={listItem.name} key={listItem.id} />;
      })
    : [];

  return <ul>{listItems}</ul>;
}
