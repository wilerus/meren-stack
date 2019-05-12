import React from 'react';
import { useDispatch } from 'react-redux';

export default function(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <li>{props.name}</li>
      <button onClick={() => dispatch({ type: 'increment' })} />
    </div>
  );
}
