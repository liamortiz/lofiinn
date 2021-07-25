import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './components/home/Home';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import Article from './components/article/Article';
import MusicBar from './components/audio/AudioWrapper';
import AudioManager from './components/audio/AudioManager';
import ChatContainer from './components/chat/ChatContainer';

import kudasai from './assets/kudasai-wheniseeyou.mp3';
import kudasai_thegirl from './assets/kudasai-thegirl.mp3';
import fleetwood from './assets/fleetwoodmac-dreams.mp3';

const App = () => {
  const tracks = [
    {name: "When I see you", artist: "kudasai", album: "custom1", fileName: kudasai},
    {name: "The Girl", artist: "kudasai", album: "custom1", fileName: kudasai_thegirl},
    {name: "Dreams", artist: "FleetWood Mac", album: "custom1", fileName: fleetwood}
    ];

  const audioManager = new AudioManager();
  audioManager.addNewPlaylist('default', tracks);
  
  return (
    <>
    <Header/>
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/articles" component={Article}/>
        <Route component={PageNotFound}/>
      </Switch>
      <ChatContainer/>
    </div>
    <MusicBar AudioManager={audioManager}/>
    </>
  );
}
export default App;
