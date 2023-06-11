import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div className='container'>
        <div className='col col-1 footer-logo'>
            <img src="https://scrt.link/logo-transparent.svg" className='footer-img' alt="" />
            <p>scrt.link</p>
        </div>
        <div className='col'>
            <h5>Help</h5>
            <span className='bar'></span>
                <a href='/'>Contact Us</a>
                <a href='/'>Chat</a>
                <a href='/'>Help Center</a>
                <a href='/'>FAQ</a>

        </div>
        <div className='col'>
            <h5>Secrets</h5>
            <span className='bar'> </span>
                <a href='/'>Text</a>
                <a href='/'>Files</a>
                <a href='/'>Redirect</a>
                <a href='/'>Neogram</a>
           
        </div>
        <div className='col'>
            <h5>Integration</h5>
            <span className='bar'> </span>
                <a href='/'>Slack App</a>
                <a href='/'>Google Chrome</a>
                <a href='/'>Mozilla Firefox</a>
                <a href='/'>Microsoft Edge</a>
        </div>
       
        <div className='col'>
            <h5>Social</h5>
            <span className='bar'> </span>
                <a href='/'><FaFacebook className='icon'/></a>
                <a href='/'><FaTwitter className='icon'/></a>
                <a href='/'><FaLinkedin className='icon'/></a>
                <a href='/'><FaGithub className='icon'/></a>
        </div>
    </div>
    
</div>
  )
}

export default Footer
