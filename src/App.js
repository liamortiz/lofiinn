import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './components/home/Home';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import Article from './components/article/Article';
import MusicBar from './components/audio/AudioWrapper';
import AudioManager from './components/audio/AudioManager';
import ChatContainer from './components/chat/ChatContainer';
import { v4 as uuidv4 } from 'uuid';

import kudasai from './assets/kudasai-wheniseeyou.mp3';
import kudasai_thegirl from './assets/kudasai-thegirl.mp3';
import fleetwood from './assets/fleetwoodmac-dreams.mp3';
import Playlist from './components/audio/Playlist';

const App = () => {
  const tracks = [
    {name: "When I see you", artist: "kudasai", album: "custom1", fileName: kudasai, id: uuidv4()},
    {name: "The Girl", artist: "kudasai", album: "custom1", fileName: kudasai_thegirl, id: uuidv4()},
    {name: "Dreams", artist: "FleetWood Mac", album: "custom1", fileName: fleetwood, id: uuidv4()}
    ];
  const audioManager = new AudioManager();
  audioManager.addNewPlaylist("chill-mix", tracks, uuidv4());
  
  return (
    <>
    <Header/>
    <div className="App">
      <Switch>
      <Route
        path='/'
        render={(props) => (
          <HomePage {...props} AudioManager={audioManager} tracks={tracks}/>
        )}
      />

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
