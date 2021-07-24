import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './components/home/Home';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import Article from './components/article/Article';
import MusicBar from './components/audio/MusicBar';

const App = () => {
  return (
    <>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/articles" component={Article}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
    <MusicBar/>
    </>
  );
}
export default App;
