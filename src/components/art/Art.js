import albumCover1 from '../../assets/covers/lofi-art-1.jpg';
import albumCover2 from '../../assets/covers/lofi-art-2.jpg';
import albumCover3 from '../../assets/covers/lofi-art-3.jpg';
import albumCover4 from '../../assets/covers/lofi-art-4.jpg';
import albumCover5 from '../../assets/covers/avatar.jpg';
import albumCover6 from '../../assets/covers/lofi-art-5.jpg';
import avatar from '../../assets/avatar.png';

import './_art.scss';

const dummyArtData = [
    {artist: 'bootlegboy', image: albumCover1, avatar, views: Math.floor(Math.random(1000) * 100)},
    {artist: 'kudasai', image: albumCover2, avatar, views: Math.floor(Math.random(1000) * 100)},
    {artist: 'fleetWood', image: albumCover3, avatar, views: Math.floor(Math.random(1000) * 100)},
    {artist: 'ldre', image: albumCover4, avatar, views: Math.floor(Math.random(1000) * 100)},
    {artist: 'kudasai', image: albumCover5, avatar, views: Math.floor(Math.random(1000) * 100)},
    {artist: 'xiipanda', image: albumCover6, avatar, views: Math.floor(Math.random(1000) * 100)},
]

const Art = () => {
    return (
        <div id="art-wrapper">
            <div className="photo-column">
            {dummyArtData.slice(0, 3).map(({artist, image, avatar, views}, index) => 
                <div className="art-image-container" key={`col1-${index}`}>
                    <img src={image} alt=""/>
                    <div className="artist-details glass">
                        <img className="artist-avatar" src={avatar} alt=""/>
                        <p>{artist}</p>
                        <div className="view-details">
                            <div className="icon view-icon"></div>
                            <p>{views}</p>
                        </div>
                        <button className="icon download-icon"></button>
                    </div>
                </div>
            )}
            </div>
            <div className="photo-column">
            {dummyArtData.slice(3, dummyArtData.length).map(({artist, image, avatar, views}, index) => 
                <div className="art-image-container" key={`col1-${index}`}>
                    <img src={image} alt=""/>
                    <div className="artist-details glass">
                        <img className="artist-avatar" src={avatar} alt=""/>
                        <p>{artist}</p>
                        <div className="view-details">
                            <div className="icon view-icon"></div>
                            <p>{views}</p>
                        </div>
                        <button className="icon download-icon"></button>
                    </div>
                </div>
            )}
            </div>
            <div className="photo-column">
            {dummyArtData.slice(0, 3).map(({artist, image, avatar, views}, index) => 
                <div className="art-image-container" key={`col1-${index}`}>
                    <img src={image} alt=""/>
                    <div className="artist-details glass">
                        <img className="artist-avatar" src={avatar} alt=""/>
                        <p>{artist}</p>
                        <div className="view-details">
                            <div className="icon view-icon"></div>
                            <p>{views}</p>
                        </div>
                        <button className="icon download-icon"></button>
                    </div>
                </div>
            )}
            </div>
            
        </div>
    )
}

export default Art;