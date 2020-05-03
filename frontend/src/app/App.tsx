import React from 'react';
import './App.css';
import Router from '../router';

import Modals from './../components/Modals';

function App() {
    return (
        <div className="App-page">
            <Router />
            <Modals/>
        </div>
    );
}

export default App;
