import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/Home';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import Article from './components/article/Article';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/articles" component={Article}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}
export default App;
