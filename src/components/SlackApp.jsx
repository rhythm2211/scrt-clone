import React from 'react'
import './SlackApp.css'
import {cilCheckCircle } from '@coreui/icons';
import img from '../images/slackapp.png'
const SlackApp = () => {
  return (
    <div>
    <div className='container'>
    <div className="slack-text text-container">
    <h1 className='slack-app-head'>The Slack App</h1>
    <p class="small-text">NEW</p>
    <h2 className='slack-sub-text'>
    Some things better not stay in your chat history. Next time a coworker asks you for an access token, API key or password, you can respond in good conscience.
    </h2>
    <img src={img} className='slack-img' alt="" />
    <div className='slackimg-sub-text'>
     <p className='img-subtext'>- Encrypted, disposable messages, stored outside of Slack.</p>
        <p className='img-subtext'>- Create one-time secrets via shortcut or slash command.</p>
        <p className='img-subtext'>- Burn notification after a secret has been viewed.</p>

    <div className="slack-btns">
        <button className='custom-btn'>LEARN MORE</button>
        <button className='custom-btn-2'>ADD TO SLACK</button>
    </div>
    </div>
    </div>
   
    </div>
    </div>
  )
}

export default SlackApp
