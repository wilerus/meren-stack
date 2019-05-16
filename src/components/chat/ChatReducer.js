function chatReducer(state = {}, action) {
  switch (action.type) {
    case 'postMessage':
      return fetch('chat/postMessage', {
        method: 'POST',
        body: JSON.stringify({
          text: action.text
        })
      })
        .then(response => response.json())
        .then(data => {
          return state.chat.push(data);
        });
    case 'setChats':
      return {
        chats: action.chats
      };
    case 'createChat':
      return fetch('chat/createChat', {
        method: 'POST',
        body: JSON.stringify({
          name: action.name
        }),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          return {
            chats: [...state.chats, data]
          };
        });
    default:
      return state;
  }
}

export default chatReducer;
