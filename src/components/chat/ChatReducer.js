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
    case 'getChat':
      return fetch('chat/list', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          return {
            chats: data
          };
        });
    case 'createChat':
      return fetch('chat/createChat', {
        method: 'POST',
        body: JSON.stringify({
          name: action.name
        })
      })
        .then(response => response.json())
        .then(data => {
          return state.items.push(data);
        });
    default:
      return state;
  }
}

export default chatReducer;
