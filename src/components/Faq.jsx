import React from 'react'
import { useState } from 'react';
import './Faq.css'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
    <div>
      <div className="container">
        <div className="faq-text">
            <h1 className='faq-heading'>FAQ</h1>
            <h2 className='faq-sub-heading'>Frequently asked questions</h2>
            <div className="faq-accordion">
            {faqData.map((item, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => handleAccordionClick(index)}
        >
          <div className="question">{item.question}</div>
          <div className="answer">{item.answer}</div>
        </div>

      ))}
            </div>
            <a href="https://scrt.link/faq">READ MORE ON FAQ PAGE</a>
        </div>
      </div>
    </div>
  )
}

const faqData = [
    {
      question: 'Why should I use this service?',
      answer: 'Sharing secrets is delicate. You dont want sensitive information (confidential information, passwords, API keys, access tokens, key combinations, confessions, etc.) to stay in your Slack channel, Whatsapp chat log, inbox, or any other communication channel. A one-time disposable link guarantees that your secret is only viewed exactly once, before being permanently destroyed.Use this service in case you want to: Share your Netflix password with a family member.Send a private message from a public computer.Send access tokens, API keys, PIN codes to a friend or coworker.Forward payment information such as credit card number or Bitcoin wallet address.Confess to a secret crush.Transmit information that could be used against you.'
    },
    
    {
      question: 'Who is it for?',
      answer: 'Essentially everybody. Everybody should care about privacy.The means to transmit sensitive information anonymously is especially crucial for journalists, lawyers, politicians, whistleblowers, people who are being oppressed, etc.',
    },
    
    {
        question: 'How secure is this service?',
        answer: 'All messages are end-to-end encrypted using AES-256, which is virtually impenetrable using brute-force methods. AES would take billions of years to break using current computing technology. For the highest level of security, an optional password (which is never stored either) will be used to encrypt your message. Read more on our Security page.',
    },
    
    {
        question: 'Can I retrieve a secret that has already been visited?',
        answer: 'Nope. It is a one time secret. We show it once and then delete it permanently from the database. There is no backup. Its gone for good.'
    },
    
    {
        question: 'Can the recepient save the message?',
        answer: 'Sure. You can always take a screenshot. The idea behind this service is to securely share sensitive information one time. We (obviously) dont have control over what a recipient does with the message.',
    }  
  ];

export default Faq
