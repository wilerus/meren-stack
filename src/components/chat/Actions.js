import AppStore from '../../AppStore';

export async function getChats() {
  const response = await fetch('chat/list', {
    method: 'GET'
  });
  const data = await response.json();
  AppStore.dispatch({ type: 'setChats', chats: data });
}
