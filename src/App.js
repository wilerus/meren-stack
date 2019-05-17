import React from 'react';
import Store from './AppStore';
import { Provider } from 'react-redux';
import ChatsList from './pages/ChatsList';
import Chat from './pages/Chat';
import Home from './pages/Home';
import './styles/TopNavigation.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="top-navigation">
          <Link className="top-navigation_link" to="/chat">
            Open chat
          </Link>
        </div>
        <Route path="" component={Home} />
        <Route path="/chat" component={ChatsList} />
        <Route path="/chat/:id/messages" component={Chat} />
      </Router>
    </Provider>
  );
}

export default App;
