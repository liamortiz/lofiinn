import { Link } from 'react-router-dom';
import './_home.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateCurrentTrack } from '../../redux/actions/audioActions';

const homeProps = {tracks: PropTypes.array.isRequired};

const Home = (props) => {

    const dispatch = useDispatch();

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
                    {props.tracks.slice(0, 3).map(track => (
                        <div className="track-container" key={track.id} onClick={() => dispatch(updateCurrentTrack(track))}>
                            <img src={track.cover} alt=""/>
                            <p className="track-name">{track.name}</p>
                            <p className="track-artist">{track.artist}</p>
                        </div>
                    ))}
                </div>
                <h2>Picked by You</h2>
                <div className="track-overview">
                    {props.tracks.slice(3, 6).map(track => (
                        <div className="track-container" key={track.id} onClick={() => dispatch(updateCurrentTrack(track))}>
                            <img src={track.cover} alt=""/>
                            <p className="track-name">{track.name}</p>
                            <p className="track-artist">{track.artist}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};

Home.propTypes = homeProps;

export default Home;