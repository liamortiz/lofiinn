import {Link} from 'react-router-dom';
import './_home.scss';

const Home = () => {
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
    </div>
)};
export default Home;
