function chatReducer(state = {}, action) {
  switch (action.type) {
    case 'setChats':
      return {
        chats: action.chats
      };
    case 'setChat':
      let newChats = [];
      if (state.chats) {
        newChats = state.chats.filter(c => c._id !== action.chat._id);
      }

      newChats.push(action.chat);
      return {
        chats: newChats
      };
    default:
      return state;
  }
}

export default chatReducer;
