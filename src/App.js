import {Route, Switch} from 'react-router-dom';

import HomePage from './components/home/Home';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import Article from './components/article/Article';
import ChatContainer from './components/chat/ChatContainer';

const App = () => {
  return (
    <>
    <Header/>
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/articles" component={Article}/>
        <Route component={PageNotFound}/>
      </Switch>
      <ChatContainer/>
    </div>
    </>
  );
}
export default App;
