function chatReducer(state = {}, action) {
  switch (action.type) {
    case 'setChats':
      return {
        chats: action.chats
      };
    case 'setChat': {
      let newChats = [];
      if (state.chats) {
        newChats = state.chats.filter(c => c._id !== action.chat._id);
      }

      newChats.push(action.chat);

      return {
        chats: newChats
      };
    }
    case 'addMessage':
      let editChat;
      if (state.chats) {
        editChat = state.chats.find(c => c._id === action.data.id);
      }
      const newChat = Object.assign({}, editChat, {
        messages: [...editChat.messages, action.data.message]
      });

      return {
        chats: [...state.chats.filter(c => c._id !== action.data.id), newChat]
      };
    default:
      return state;
  }
}

export default chatReducer;
