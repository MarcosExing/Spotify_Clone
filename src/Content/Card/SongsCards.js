import React, {useState, useRef} from "react";
import './Card.css';
import Cover from '../../assets/images/Folder-SouEu.jpg';
import InTheNight from '../../assets/musics/In The Night.wav';
import JumpUp from '../../assets/musics/Jump Up.wav';
import DeepInYourMind from '../../assets/musics/Deep In Your Mind.wav';
import Slicer from '../../assets/musics/Slicer.wav'

const SongsCards = () => {
    const [reproduzindo, setReproduzindo] = useState(false);
    const InTheNightRef = useRef(new Audio(InTheNight));
    const JumpUpRef = useRef(new Audio(JumpUp));
    const DeepInYourMindRef = useRef(new Audio(DeepInYourMind));
    const SlicerRef = useRef(new Audio(Slicer));

    function playMusic(musicaRef) {
        const musica = musicaRef.current;

        if (!reproduzindo) {
            musica.play();
            musica.volume = 0.5;
            setReproduzindo(true);
        } else {
            musica.pause();
            setReproduzindo(false);
        }
    }

    return (
        <div className="cards">

            <div className="card" onClick={() => playMusic(InTheNightRef)}>
                <img src={Cover} alt="In The Night" />
                <span className="title">In The Night</span>
                <div className="play">
                    <span className="fa fa-circle-play" />
                </div>
            </div>

            <div className="card" onClick={() => playMusic(JumpUpRef)}>
                <img src={Cover} alt="Jump Up Cover" />
                <span className="title">Jump Up</span>
                <div className="play">
                    <span className="fa fa-circle-play" />
                </div>
            </div>

            <div className="card" onClick={() => playMusic(DeepInYourMindRef)}>
                <img src={Cover} alt="Deep In Your Mind Cover" />
                <span className="title">Deep In Your Mind</span>
                <div className="play">
                    <span className="fa fa-circle-play" />
                </div>
            </div>

            <div className="card" onClick={() => playMusic(SlicerRef)}>
                <img src={Cover} alt="Slicer Cover" />
                <span className="title">Slicer</span>
                <div className="play">
                    <span className="fa fa-circle-play" />
                </div>
            </div>

        </div>
    );
}

export default SongsCards;