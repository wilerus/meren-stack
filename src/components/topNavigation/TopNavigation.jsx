import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './TopNavigation.css';

export default function TopNavigation() {
  return (
    <Router>
      <div className="top-navigation">
        <Link className="top-navigation_link" to="/chat">
          Open chat
        </Link>
      </div>
    </Router>
  );
}
