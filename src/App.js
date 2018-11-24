import React, { Component } from 'react';
import './App.css';

import Hourglass from './components/hourglass';

import data from './data';

class App extends Component {
    render() {
        return ( <div className="App">
            <header className="App-header">
                <Hourglass data={ data } />
            </header>
        </div> );
    }
}

export default App;
