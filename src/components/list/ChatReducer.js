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
    case 'increment':
      return {
        items: [
          {
            id: 1,
            name: state.items[0].name + 1
          }
        ]
      };
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default chatReducer;
