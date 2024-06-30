// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/video/:id" component={VideoDetail} />
            </Switch>
        </Router>
    );
};

export default App;
