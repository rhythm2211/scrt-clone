import React from 'react'
import { useState } from 'react';
import './Home.css'
const Home = () => {
    const [isCommentVisible, setCommentVisible] = useState(true);
  
    const toggleCommentVisibility = () => {
      setCommentVisible(!isCommentVisible);
    }
    const [showCommentBox, setShowCommentBox] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [secretLink, setSecretLink] = useState('');
  
    const handleSwitch = () => {
      setShowCommentBox(!showCommentBox);
      setSubmitted(false);
      setSecretLink('');
    };
  
    const handleSubmit = () => {
      // Simulating submission and generating secret link
      const secret = Math.random().toString(36).substring(2, 15);
      setSubmitted(true);
      setSecretLink(`https://example.com/${secret}`);
    };
  
    return (
    <div>
      <div container>
        <div className="hero-image">
            <img src="https://scrt.link/logo-transparent.svg" alt="" />
        </div>
        <div className="heading">
            <p className='head-text'>Share a secret</p>
            <h2>...with a link that only works <span className='pink-underline'>one time</span> and then <br />self-destructs</h2>
        </div>
        <div className='input-box'>
        <div>
        <button onClick={toggleCommentVisibility} className='comment'>Comment Box</button>
        <button onClick={toggleCommentVisibility} className='upload'>Upload File</button>
      </div>
      {isCommentVisible ? (
        <div>
          {/* Comment Box */}
          <textarea rows={4} cols={50} className='comment-box' placeholder='What is your secret??'></textarea>
          <button className='submit-btn'>CREATE SECRET LINK</button>
        </div>
      ) : (
        <div className='upload-box'>
          {/* Upload File */}
          <div>
          <label for="file-upload" class="file-upload-label" onClick={() => handleSwitch()}>
  Choose File
  <input type="file" id="file-upload" class="file-upload-input" />
</label>
<h5 className='sub-text'>or drag and drop here..</h5>
<button onClick={() => handleSubmit()} className='file-submit-btn'>Submit</button>
        {submitted && (
          <div className="secret-link">
            Secret Link: <a href={secretLink}>{secretLink}</a>
          </div>
        )}
</div>
        </div>
      )}
        </div>
        <div className='box-text'>
            <p>End to End encrypted</p>
            <p>Swiss Privacy</p>
            <p>Without a trace</p>
        </div>
      </div>
    </div>
  )
}

export default Home
