import React from 'react';
import ListItem from './ListItem';

export default function ChatList(props) {
  const listItems = props.items.map(listItem => {
    return <ListItem name={listItem.name} />;
  });

  return <ul>{listItems}</ul>;
}
