import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>
     <div className='container'>
        <div className="text">
        <h1 className=" about-head">
            One-time Secrets
        </h1>
        <h2 children className='about-sub-text'>
        Share sensitive information that can only be viewed one time.The perfect way to transmit passwords, credit card <br /> information, private keys, or other confidential data.
        </h2>
        </div>




        <div className="block">
            <div className="card">
                <p className='num'>1</p>
                <img src="https://icons-for-free.com/iconfiles/png/512/pencil+sheet+writing+icon-1320086462161608213.png" className='write-img' alt="" />
                <h3 className='card-text'>Write</h3>
                <p className='card-sub-text'>Compose your secret and get a one-time link.</p>
            </div>
            <div className="card">
                <p className='num'>2</p>
                <img src="https://www.freeiconspng.com/thumbs/share-icon/black-circle-social-media-share-icon-png-25.png" className='write-img' alt="" />
                <h3 className='card-text'>Share</h3>
                <p className='card-sub-text'>Send the generated link to your confidant.</p>
            </div>
            <div className="card">
                <p className='num'>3</p>
                <img src="https://static.vecteezy.com/system/resources/previews/022/991/254/original/cartoon-fire-effect-a-yellow-bonfire-burns-to-heat-png.png" className='write-img' alt="" />
                <h3 className='card-text'>Burn</h3>
                <p className='card-sub-text'>After the secret has been viewed, it gets destroyed.</p>
            </div>
        </div>


        <div className="block-2">
            <div className="block2-text">
                <h1 className='about-encrypt'>End to End Encryption</h1>
                <h2 className='about-sub-text head-sub-text'>We encrypt your secret on your device. The encryption key is never stored but becomes part of the link itself. Without the full link, nobody, including us, will ever be able to decrypt your secret.</h2>
                <a href="https://scrt.link/security">Learn More About Security</a>
            <img src="https://scrt.link/images/localized/en/link-explanation.svg" className='encrypt-img' alt="" />
            </div>
        </div>
     </div>
    </div>
  )
}

export default About
