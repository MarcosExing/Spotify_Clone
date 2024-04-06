import React from "react";
import './Header.css';
import './Header-media-queries.css'
import logo from '../assets/icons/SpotifyLogo.png'

const Header = () => {
    return (
        <nav className="header__navigation">

            <div className="logo">
                <span className="fa fa-bars"></span>
                <a href="">
                    <img src={logo} alt="logo do Spotify" />
                </a>
            </div>

            <div className="navigation">

                <button className="arrow-left">
                    <span className="fa fa-chevron-left"></span>
                </button>

                <button className="arrow-right">
                    <span className="fa fa-chevron-right"></span>
                </button>

            </div>

            <div className="header__search">
                <span className="fa fa-magnifying-glass"></span>
                <input type="text" id="search-input" maxLength="800" placeholder="O que você quer ouvir?"/>
            </div>

            <button className="search-button">
                <span className="fa fa-magnifying-glass"></span>
            </button>

            <div className="header__login">
                <button className="subscribe">Inscrever-se</button>
                <button className="login">Entrar</button>
            </div>

        </nav>
    );
}

export default Header;