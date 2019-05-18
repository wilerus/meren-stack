import AppStore from '../../AppStore';

export async function getChats() {
  const response = await fetch('/chat/list', {
    method: 'GET'
  });
  const data = await response.json();
  AppStore.dispatch({ type: 'setChats', chats: data });
}

export async function getChat(id) {
  const response = await fetch(`/chat/getChat?id=${id}`, {
    method: 'GET'
  });
  const data = await response.json();
  AppStore.dispatch({ type: 'setChat', chat: data });
}

export async function postMessage(text) {
  const response = await fetch(`/chat/postMessage`, {
    method: 'POST',
    body: JSON.stringify({
      text: text
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
  const data = await response.json();
  AppStore.dispatch({ type: 'addMessage', message: data });
}
