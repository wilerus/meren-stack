import React from 'react';
import Store from './AppStore';
import { Provider } from 'react-redux';
import ChatsList from './pages/ChatsList';
import Chat from './pages/Chat';
import Home from './pages/Home';
import './styles/TopNavigation.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="top-navigation">
          <Link className="top-navigation_link" to="/chat">
            Open chat
          </Link>
        </div>
        <Route
          render={({ location }) => (
            <TransitionGroup className="transition-group_container">
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/chat" component={ChatsList} />
                  <Route path="/chat/:id/messages" component={Chat} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </Provider>
  );
}

export default App;
