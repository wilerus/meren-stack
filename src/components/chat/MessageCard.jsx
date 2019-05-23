import React from "react";

export default function(props) {
  const timeString = props.creationDate
    ? `${new Date(props.creationDate).getHours()}: ${new Date(
        props.creationDate
      ).getMinutes()}`
    : "xx : xx";

  return (
    <div className="chat-message">
      <div className="chat-message_name">{props.name} </div>
      <div className="chat-message_date">{timeString} </div>
    </div>
  );
}
