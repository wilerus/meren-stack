import { createStore } from 'redux';

function counter(state = 0, action) {
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

const initialState = {
  items: [
    {
      id: 1,
      name: '5'
    }
  ]
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter, initialState);

export default store;
