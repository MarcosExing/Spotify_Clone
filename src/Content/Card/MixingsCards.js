import React, {useState, useRef} from "react";
import './Card.css';
import Cover from '../../assets/images/Folder-SouEu.jpg';
import Mixing1 from '../../assets/musics/Mix1.mp3';
import Mixing2 from '../../assets/musics/Mix4.mp3';

const MixingsCards = () => {
    const [reproduzindo, setReproduzindo] = useState(false);
    const Mixing1Ref = useRef(new Audio(Mixing1));
    const Mixing2Ref = useRef(new Audio(Mixing2));

    function playMusic(musicaRef) {
        const musica = musicaRef.current;

        if (!reproduzindo) {
            musica.play();
            musica.volume = 0.3;
            setReproduzindo(true);
        } else {
            musica.pause();
            setReproduzindo(false);
        }
    }

    return (
        <div className="cards">

            <div className="card" onClick={() => playMusic(Mixing1Ref)}>
                <img src={Cover} alt="Mixing 1" />
                <span className="title">Mixing 1</span>
                <div className="play">
                    <span className="fa fa-circle-play" />
                </div>
            </div>

            <div className="card" onClick={() => playMusic(Mixing2Ref)}>
                <img src={Cover} alt="Mixing 2" />
                <span className="title">Mixing 2</span>
                <div className="play">
                    <span className="fa fa-circle-play" />
                </div>
            </div>

        </div>
    )
}

export default MixingsCards;