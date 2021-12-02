import react from 'react';
import './App.css';
function App() {
  return (
    <div>
        <header className="contact_wrap">
            <div className="contact-header">
                <div className="container">
                    <div className="row">
                        <div className="contact-header__container">
                            <ul className="contact-header__list">
                                <li><a href="#">FENDER.COM</a></li>
                                <li><a href="#">PLAY</a></li>
                                <li><a href="#">TUNE</a></li>
                                <li><a href="#">BEGINNERS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-banner"></div>
            <div className="navbar-contact">
                <div className="container">
                    <div className="row">
                        <div className="navbar-contact__container">
                            <div className="navbar-menu-toggle">
                                <a href="#"><img src="/img/fender_logo.png" alt="" width="80px"/></a>
                            </div>
                            <ul className="navbar-contact__list">
                                <li><a href="#">ELECTRICS</a></li>
                                <li><a href="#">ACOUSTASONIC</a></li>
                                <li><a href="#">ACOUSTICS</a></li>
                                <li><a href="#">BASSES</a></li>
                                <li><a href="#">AMPS & AUDIO</a></li>
                                <li><a href="#">PARTS</a></li>
                                <li><a href="#">ACCESSORIES</a></li>
                                <li><a href="#">LIFESTYLE</a></li>
                                <li><a href="#">SQUIER</a></li>
                            </ul>
                            <div className="navbar-search-toggle">
                                <a href="#"><i className="fas fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="menu-collection">
            <div className="large-menu-item">
                <div className="items">
                    <a href="#"><img src="/img/SCREAMDELICA_STRATOCASTER.jpg" alt="" width="100%"/></a>
                </div>
            </div>
            <div className="middle-menu-item">
                <div className="item">
                    <a href="#"><img src="/img/2021_NEW_RELEASES.jpg" alt="" width="100%"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/MUSTANG_MICRO.jpg" alt="" width="100%"/></a>
                </div>
            </div>
            <div className="menu-item">
                <div className="item">
                    <a href="#"><img src="/img/30th_Anniversary_Screamadelica_Stratocaster.jpg" alt="" width="180px"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/Dual_Marine_Layer_Reverb.jpeg" alt="" width="180px"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/Player_Plus_Stratocaster.jpg" alt="" width="180px"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/Player_Plus_Jazz_Bass.jpg" alt="" width="180px"/></a>
                </div>
            </div>            
            <div className="middle-menu-item">
                <div className="item">
                    <a href="#"><img src="/img/ANERICAN_PROFESSIONAL_II.jpg" alt=""width="100%"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/THE_PLAYER_SERIES.jpg" alt=""width="100%"/></a>
                </div>
            </div>
            <div className="middle-menu-item">
                <div className="item">
                    <a href="#"><img src="/img/THE_BILLIE-EILISH_UKULELE.jpg" alt=""width="100%"width="100%"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/AMERICAN_ULTRA_LUXE.jpg" alt=""width="100%"/></a>
                </div>
 
            </div>
            <div className="menu-item">
                <div className="item">
                    <a href="#"><img src="/img/Pro_Glow_in_the_Dark_Cables.jpg" alt="" width="100%"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/351_Guitar_Wall_Hanger.jpg" alt="" width="100%"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/Fenderx Kyser_Quick-Change_Electric_Guitar_Capo.jpg" alt="" width="100%"/></a>
                </div>
                <div className="item">
                    <a href="#"><img src="/img/Neon_Monogrammed_Strap.jpg" alt="" width="100%"/></a>
                </div>
            </div>   
        </div>
    </div>
  );
}

export default App;
