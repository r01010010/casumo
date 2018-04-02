import React, { Component } from 'react';
import Presentation from './components/molecules/Presentation';
import SearchForm from './components/organisms/SearchForm';
import ResultsAllStates from './components/organisms/ResultsAllStates';
import GoToTopFloatButton from './components/molecules/GoToTopFloatButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <div className="App">
          <Presentation />
          <SearchForm />
          <ResultsAllStates />
        </div>
        <GoToTopFloatButton />
      </div>

    );
  }
}

export default App;
