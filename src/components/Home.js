import React from "react";
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Partner1 from '../assets/dell-logo.png'
import Partner2 from '../assets/apple-logo.png'
import Partner3 from '../assets/hp-logo.png'
import Partner4 from '../assets/intel-logo.png'
import Partner5 from '../assets/lenovo-logo.png'
import Partner6 from '../assets/microsoft-logo.png'
import Partner7 from '../assets/apc-logo.png'
import Partner8 from '../assets/netgear-logo.png'
import Partner9 from '../assets/cisco-logo.png'
import Partner10 from '../assets/logitech-logo.png'
import Subimage1 from '../assets/subimage1.png'
import Subimage2 from '../assets/subimage2.png'
import Subimage3 from '../assets/subimage3.png'

function Home() {
    return (
      <div className="main">
        <div className="section">
          <h1>Tired of vendors who "get IT"? We're here to get you.</h1>
          <p>Procurement and IT Services for normal people.</p>
        </div>
        <div className="cta-buttons">
            <Link className='main-button main-try' to='/login'>
                Try us out
            </Link>
            <Link className='main-button main-contact' to='/contact'>
                Become a Partner
            </Link>
        </div>
        <div className="section-break">
            Over 37 brands to choose from, including
        </div>
        <div className="partner-section">
            <img src={Partner1} alt="dell" />
            <img src={Partner2} alt="apple" />
            <img src={Partner3} alt="hp" />
            <img src={Partner4} alt="intel" />
            <img src={Partner5} alt="lenovo" />
            <img src={Partner6} alt="microsoft" />
            <img src={Partner7} alt="apc" />
            <img src={Partner8} alt="netgear" />
            <img src={Partner9} alt="cisco" />
            <img src={Partner10} alt="logitech" />
        </div>

        <div className="card-section">
            <div className="card">
                <div class="card-container">
                    <h3>Onboarding</h3> 
                </div>
            </div>

            <div className="card">
                <div class="card-container">
                    <h3>Procurement</h3> 
                </div>
            </div>

            <div className="card">
                <div class="card-container">
                    <h3>Inventory</h3> 
                </div>
            </div>

            <div className="card">
                <div class="card-container">
                    <h3>Service Desk</h3> 
                </div>
            </div>
        </div>

        <div className="box-section box-primary">
            <div className="box-section-internal">
                <div class='box-section-text'>
                    <h3>Hardware at every level</h3>
                    <p>Whether it's high-grade servers, switches, AP's, or just plain ol'
                        desk hardware, we've got you covered with brands you know and trust.
                    </p>
                </div>
                <div className='box-section-image'>
                    <img src={Subimage1} alt='test' />
                </div>
            </div>
        </div>

        <div className="box-section">
            <div className="box-section-internal">
                <div className='box-section-image'>
                    <img src={Subimage2} alt='test' />
                </div>
                <div class='box-section-text'>
                    <h3>Suport for the Apple suite</h3>
                    <p>Used to Apple? No problem, so are we. Choose from a slew of Apple
                        devices you're familiar with and add AppleCare into monthly or 
                        yearly plans at a discount*.  
                    </p>
                </div>
            </div>
        </div>

        <div className="box-section box-secondary">
            <div className="box-section-internal">
                <div class='box-section-text'>
                    <h3>Helpdesk and Onboarding</h3>
                    <p>New employee onboarding and ongoing support is a breeze with us.
                        We get being lean, but we won't be mean while we help everyone get
                        comfy with their new hardware.
                    </p>
                </div>
                <div className='box-section-image'>
                    <img src={Subimage3} alt='test' />
                </div>
            </div>
        </div>

        <div className="stat-section">
            <div className="stat-card">
                <h3>90+</h3>
                <p>Products</p>
            </div>
            <div className="stat-card">
                <h3>40+</h3>
                <p>Cities</p>
            </div>
            <div className="stat-card">
                <h3>20+</h3>
                <p>Partners</p>
            </div>
        </div>

        <div className="section interstitial">
            <h3>Regardless what you need, we're here for you.</h3>
        </div>

        <div className="cta-buttons">
            <Link className='main-button main-contact' to='/contact'>
                Contact us to get started today
            </Link>
        </div>

        <div className="footer-section">
            <p>© 2023 Diskdot · All rights reserved</p>
        </div>

      </div>
    );
  }
  
  export default Home;