import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TradingTools from './components/TradingTools';
import TickerMarquee from './components/TickerMarquee';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <TickerMarquee />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/trading-tools" component={TradingTools} />
            {/* Add more routes as needed */}
            <Route path="/" component={Dashboard} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
