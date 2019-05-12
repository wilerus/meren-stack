import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './TopNavigation.css';

export default function TopNavigation() {
  return (
    <Router>
      <div className="top-navigation">
        <ul>
          <li>
            <Link to="/chat">Open chat</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}
