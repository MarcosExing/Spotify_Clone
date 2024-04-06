import React from "react";
import './SideBar.css';
import './SideBar-media-queries.css'
import logo from '../assets/icons/SpotifyLogo.png'

const SideBar = () => {
    return (
        <div className="sidebar">

            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="./">
                        <img src={logo} alt="logo do Spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span className="fa fa-house"></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="fa fa-magnifying-glass"></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">

                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fa-book"></span>
                        <span>Sua Biblioteca</span>
                    </button>
                    <a href="">
                        <span className="fa fa-plus"></span>
                    </a>
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SideBar;