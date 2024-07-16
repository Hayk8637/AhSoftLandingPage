import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import img from './burger_sandwich_PNG4135 2.png';
import { useTranslation } from 'react-i18next';

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm('service_hm3uuxh', 'template_o114h4j', formRef.current, 'F7Bl8FFoHdgF9koa-')
        .then((result) => {
          alert('Email sent successfully!');
          setEmail('');  // Reset the email state
        }, (error) => {
          alert('Failed to send email.');
        });
    }
  };
    const { t } = useTranslation("global");


  return (
    <div className="contactUs">
      <div className="a"></div>
      <div className='left'>
        <img src={img} alt='img' />
      </div>
      <div className='right'>
        <h1>{t("BECOMEAPartner")}</h1>
        <span>{t("Pleasewriteyouremail")}</span>
        <form className='input' ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_email"
            placeholder={t("Enteryouremail...")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t("Send")}</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
