import React from 'react';
import Store from './AppStore';
import { Provider } from 'react-redux';
import './styles/App.css';
import ChatList from './components/list/ChatList';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <ChatList />
      </div>
    </Provider>
  );
}

export default App;
