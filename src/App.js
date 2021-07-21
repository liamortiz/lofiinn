import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/Home';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}
export default App;
