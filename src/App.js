import {Route, Switch} from 'react-router-dom';

import HomePage from './components/home/Home';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import ChatContainer from './components/chat/ChatContainer';
import PlaylistManager from './components/audio/PlaylistManager';
import ArtPage from './components/art/Art';

import { v4 as uuidv4 } from 'uuid';

import kudasai from './assets/tracks/kudasai-wheniseeyou.mp3';
import kudasai_thegirl from './assets/tracks/kudasai-thegirl.mp3';
import fleetwood from './assets/tracks/fleetwoodmac-dreams.mp3';
import foreverLoveTrack from './assets/tracks/ForeverLove.mp3';
import darkChocolateTrack from './assets/tracks/DarkChocolate.mp3';
import dearKataraTrack from './assets/tracks/ldre-DearKatara.mp3';
import AudioManager from './components/audio/AudioManager';
import Playlist from './components/audio/Playlist';

import albumCover1 from './assets/covers/lofi-art-1.jpg';
import albumCover2 from './assets/covers/lofi-art-2.jpg';
import albumCover3 from './assets/covers/lofi-art-3.jpg';
import albumCover4 from './assets/covers/lofi-art-4.jpg';
import albumCover5 from './assets/covers/avatar.jpg';
import albumCover6 from './assets/covers/darkchoco.png';

const tracks = [
  {name: "When I see you", artist: "kudasai", album: "custom1", fileName: kudasai, id: uuidv4(), cover: albumCover2, playlistId: 1},
  {name: "The Girl", artist: "kudasai", album: "custom1", fileName: kudasai_thegirl, id: uuidv4(), cover: albumCover1, playlistId: 1},
  {name: "Dreams", artist: "FleetWood Mac", album: "custom1", fileName: fleetwood, id: uuidv4(), cover: albumCover3, playlistId: 1},
  {name: "Dark Chocolate", artist: "L.Dre", album: "custom1", fileName: darkChocolateTrack, id: uuidv4(), cover: albumCover6, playlistId: 2},
  {name: "Forever Love", artist: "Bootleg Boy", album: "custom1", fileName: foreverLoveTrack, id: uuidv4(), cover: albumCover4, playlistId: 2},
  {name: "Dear Katara", artist: "L.Dre", album: "custom1", fileName: dearKataraTrack, id: uuidv4(), cover: albumCover5, playlistId: 2}];


const playlists = [
  new Playlist("Chill Mix", tracks.slice(0, 3), uuidv4()),
  new Playlist("Favorites", tracks.slice(3, tracks.length), uuidv4()),
]

const App = () => {
  return (
    <>
    <Header/>
    <div className="App">
      <Switch>
        <Route
          path='/'
          exact
          render={(props) => (
            <HomePage {...props} tracks={tracks}/>
          )}
        />
        <Route path="/art" component={ArtPage}/>
        <Route component={PageNotFound}/>
      </Switch>
      <PlaylistManager playlists={playlists}/>
      <AudioManager playlists={playlists}/>
      <ChatContainer/>
    </div>
    </>
  );
}
export default App;
