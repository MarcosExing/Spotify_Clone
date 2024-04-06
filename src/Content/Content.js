import React from "react";
import './Content.css';
import './Content-media-queries.css';
import ArtistCover from '../assets/images/Martin Garrix.jpg';
import SongsCards from "./Card/SongsCards";
import MixingsCards from "./Card/MixingsCards";

const Content = () => {
    return (
        <div className="main-content">

            <div id="songsContainer" className="songs-container">

                <div className="main-title">
                    <span>Marcos Exing Songs</span>
                </div>

                <SongsCards/>

            </div>

            <div id="mixingsContainer" className="songs-container">

                <div className="main-title">
                    <span>Marcos Exing Mixes</span>
                </div>

                <MixingsCards/>

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