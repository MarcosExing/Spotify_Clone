import React, {useState} from "react";
import './Card.css';
import Cover from '../../assets/images/Folder-SouEu.jpg';
import InTheNight from '../../assets/musics/In-The-Night.mp3';

const Card = () => {
    const [reproduzindo, setReproduzindo] = useState(false);

    function playMusic() {
        const musica = new Audio(InTheNight);
        if (!reproduzindo) {
            musica.play();
            setReproduzindo(true);
        } else {
            musica.pause();
            setReproduzindo(false);
        }
    }

    return (
        <div className="card" onClick={playMusic}>
            <img src={Cover} alt="In The Night Cover" />
            <span className="title">In The Night</span>
            <div className="play">
                <span className="fa fa-circle-play" />
                {reproduzindo ? 'Pausar Música' : 'Tocar Música'}
            </div>
        </div>
    );
}

export default Card;