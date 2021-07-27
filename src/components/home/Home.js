import {Link} from 'react-router-dom';
import './_home.scss';
import PropTypes from 'prop-types';

import albumCover1 from '../../assets/lofi-art-1.jpg';
import albumCover2 from '../../assets/lofi-art-2.jpg';
import albumCover3 from '../../assets/lofi-art-3.jpg';

const Home = (props) => {

    function playTrackById(id) {
        props.AudioManager.playTrackById(id);
    }

    return (
    <div data-testid="home-wrapper" id="home-wrapper">
        <div id="welcome-heading">
            <h1>Listen, relax, focus.</h1>
            <p className="sub-heading">
                Stream Lofi exclusive music, chat with others who share your Lofi interests, and upload Lofi related content!
            </p>

            <Link className="btn sign-in-btn" to="/signin">Sign In</Link>
            <Link className="btn create-account-btn" to="/create-account">Create Account</Link>
        </div>
        <div className="track-browse">
            <h2>Community Favorites</h2>
            <div className="track-overview">
                <div className="track-container" onClick={() => playTrackById(props.tracks[0].id)}>
                    <img src={albumCover2}/>
                    <p className="track-name">When I See You</p>
                    <p className="track-artist">Kudasai</p>
                </div>
                <div className="track-container" onClick={() => playTrackById(props.tracks[1].id)}>
                    <img src={albumCover1}/>
                    <p className="track-name">The Girl</p>
                    <p className="track-artist">Kudasai</p>
                </div>
                <div className="track-container" onClick={() => playTrackById(props.tracks[2].id)}>
                    <img src={albumCover3}/>
                    <p className="track-name">Dreams</p>
                    <p className="track-artist">Fletwood Mac</p>
                </div>
            </div>

        </div>

    </div>
)};

Home.propTypes = {
    AudioManager: PropTypes.object.isRequired,
    tracks: PropTypes.array
}

export default Home;
