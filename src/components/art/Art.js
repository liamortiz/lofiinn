import albumCover1 from '../../assets/covers/lofi-art-1.jpg';
import albumCover2 from '../../assets/covers/lofi-art-2.jpg';
import albumCover3 from '../../assets/covers/lofi-art-3.jpg';
import albumCover4 from '../../assets/covers/lofi-art-4.jpg';
import albumCover5 from '../../assets/covers/avatar.jpg';
import albumCover6 from '../../assets/covers/lofi-art-5.jpg';

import './_art.scss';

/*
<div className="art-image-container">
                <img className="art-image" src={image} alt=""/>
                <div id="glass" className="artist-details">
                    <img src={albumCover6} alt="" className="artist-avatar"/>
                    <p>xiiPanda</p>
                </div>
            </div>
*/

const Art = () => {
    return(
        <div id="art-wrapper">
            <div className="photo-column">
                <img src={albumCover1} alt=""/>
                <img src={albumCover2} alt=""/>
                <img src={albumCover3} alt=""/>
            </div>
            <div className="photo-column">
                <img src={albumCover4} alt=""/>
                <img src={albumCover5} alt=""/>
                <img src={albumCover6} alt=""/>
            </div>
            <div className="photo-column">
                <img src={albumCover3} alt=""/>
                <img src={albumCover2} alt=""/>
                <img src={albumCover1} alt=""/>
            </div>
        </div>
    )
}

export default Art;