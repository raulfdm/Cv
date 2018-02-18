import React, { Component } from 'react';
import Headers from './components/Headers';
import Infos from './components/Infos';
import Career from './components/Career';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <Infos />
        <Career />
        <Skills />
      </div>
    );
  }
}

export default App;
