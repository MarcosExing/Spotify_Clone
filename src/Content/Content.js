import React from "react";
import './Content.css';
import './Content-media-queries.css';
import Cover from '../assets/images/Folder-SouEu.jpg';
import ArtistCover from '../assets/images/Martin Garrix.jpg';
import Card from './Card/Card';

const Content = () => {
    return (
        <div className="main-content">

            <div id="songsContainer" className="songs-container">

                <div className="main-title">
                    <span>Marcos Exing Songs</span>
                </div>

                <div className="cards">

                    <Card/>

                    <div className="card">
                        <img src={Cover} alt="In The Night Cover" />
                        <span className="title">In The Night</span>
                        <div className="play">
                            <span className="fa fa-circle-play" />
                            <audio id="inTheNight" src="../assets/musics/In The Night.wav" preload="auto"/>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Cover} alt="Jump Up Cover" />
                        <span className="title">Jump Up Cover</span>
                        <div className="play">
                            <span className="fa fa-circle-play" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={Cover} alt="Deep In Your Mind Cover" />
                        <span className="title">Deep In Your Mind</span>
                        <div className="play">
                            <span className="fa fa-circle-play" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={Cover} alt="Slicer Cover" />
                        <span className="title">Slicer</span>
                        <div className="play">
                            <span className="fa fa-circle-play" />
                        </div>
                    </div>

                </div>

            </div>

            <div id="mixingsContainer" className="songs-container">

                <div className="main-title">
                    <span>Marcos Exing Mixes</span>
                </div>

                <div className="cards">

                    <div className="card">
                        <img src={Cover} alt="Mixing 1" />
                        <span className="title">Mixing 1</span>
                        <div className="play">
                            <span className="fa fa-circle-play" />
                        </div>
                    </div>

                    <div className="card">
                        <img src={Cover} alt="Mixing 2" />
                        <span className="title">Mixing 2</span>
                        <div className="play">
                            <span className="fa fa-circle-play" />
                        </div>
                    </div>

                </div>

            </div>

            <div id="artistsContainer" className="artists-container hidden">

                <div className="main-title">
                    <span>Resultados:</span>
                </div>

                <div className="cards">
                    <div className="card">
                        <img src={ArtistCover} alt="Imagem do artista" />
                        <span className="title">Nome do artista</span>
                        <span className="subtitle">Descrição do artista.</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Content;