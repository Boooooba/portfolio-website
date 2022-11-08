import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useElementOnScreen from './useElementOnScreen';

const Contact = () => {

const formRef = useRef()
const [done, setDone] = useState(false)

const handleSubmit = (e)=>{
  e.preventDefault()
  emailjs.sendForm('service_mavk8p4', 'template_oecastt', formRef.current, 'jrEwhN_-ScsXcHzsI')
  .then((result) => {
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });
}

const [containerRef, isVisible] = useElementOnScreen({
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
});

  return (
    <div className='c-cont' id='contact' >
        <div className="c-bg"></div>
        <div className="c-bg-two"></div>
        <div className="c-wrapper">
          <div ref={containerRef} className="c-left">
            <h1 className={`c-left-text ${isVisible? 'show' : 'hidden'}`}>Want to know more about me? <span className='urge'>Contact!</span></h1>
          </div>
          <div className="c-right">
            <p className={`c-desc ${isVisible? 'show' : 'hidden-right'}`}>
              <b>What is it you are looking for ?</b> Get in touch!
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input className={`input-name ${isVisible? 'show' : 'hidden-right'}`} type='text' placeholder='Name' name='user_name' />
              <input className={`input-subject ${isVisible? 'show' : 'hidden-right'}`} type='text' placeholder='Subject' name='user_subject' />
              <input className={`input-email ${isVisible? 'show' : 'hidden-right'}`} type='text' placeholder='Email' name='user_email' />
              <textarea rows='5' placeholder='Message' name='message' className={`textarea ${isVisible? 'show' : 'hidden-right'}`}/>
              <button type='Submit' value='Send' className={`form-btn ${isVisible? 'show' : 'hidden-right'}`}>Submit</button>
              {done && <div className='form-thanks'>Thank you for reaching out !</div>}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact