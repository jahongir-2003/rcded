import React from 'react';
import '../header-footer/myNavbar.css';
import {Link} from 'react-router-dom';
import twitterwi from '../assets/twitterblueicon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../assets/Facebook_icon.png';
import telegram from '../assets/telegram-icon.png';
import instagram from '../assets/Instagram-Image.png';
import menuicon from '../img/menu-icon.png';

function MyNavbar (){
        return (
            <div className='container-fluid image-header fly'>
                <nav className="navbar navbar-expand-md container">
                    <a className="navbar-brand" href={"/"}>Guideus</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <img className='menu-icon' src={menuicon} alt=''/>
                    </button>
                    <div className="collapse navbar-collapse navlink" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"guideservise"}>Guide Servise</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link navitemend" to={"contact"}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link navitemend' to="#">en/ru</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link number-phone" href={"tel:+998 05 001 99 44"}>+998 50 001 99 44</a>
                            </li>
                            <li>
                                <div className='navback bg-transparent'>
                                    <Link to="https://www.facebook.com/profile.php?id=100091562413167"><img className='facebook' src={facebook} alt=""/></Link>
                                    <Link to="https://t.me/+998500019944"><img className='telegram' src={telegram} alt=""/></Link>
                                    <Link to="https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM="><img className='instagram' src={instagram} alt=""/></Link>
                                    <Link to="https://wa.me/qr/ZNXWW65DCEKUN1"><img className='twiwhiicon' src={twitterwi} alt=""/></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                </nav>
                
            </div>
        );
    }

export default MyNavbar;