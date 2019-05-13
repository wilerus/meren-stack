const initialState = {
  items: [
    {
      id: 1,
      name: '5'
    }
  ]
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case 'postMessage':
      return fetch('chat/postMessage', {
        method: 'POST',
        body: JSON.stringify({
          name: state.items[0].name + 1
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
