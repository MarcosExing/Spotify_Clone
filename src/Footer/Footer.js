import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div class="footer-container">

        <footer class="footer-bar">

            <div class="footer-bar__content">
                <span class="text title">Testar o Premium de graça</span>
                <span class="text subtitle">Inscreva-se para curtir música ilimitada e podcast só com alguns anúncios. Não
                    precisa de cartão.
                </span>
            </div>
        
            <button class="footer-bar__button">
                <span>Inscreva-se grátis</span>
            </button>

        </footer>

    </div>
    );
}

export default Footer;