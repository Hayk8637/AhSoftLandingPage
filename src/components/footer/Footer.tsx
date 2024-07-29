import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import logo from '../../assets/logo/logo.png';
import insta from '../../assets/icons/instagram.png';
import tiktok from '../../assets/icons/tiktok.png';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { i18n, t } = useTranslation("global");
  const [socialLinks, setSocialLinks] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); 
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); 
    }
  }, [i18n]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get('https://menubyqr-default-rtdb.firebaseio.com/social.json');
        setSocialLinks(response.data);
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };
    fetchSocialLinks();
  }, []);

  return (
    <div className='footer'>
      <div className='footer0'>
        <div className='up'>
          <div className='left'>
            <img src={logo} alt='logo' />
          </div>
          <div className='right'>
            <ul>
              <li><a href='/'>{t("About")}</a></li>
              <li><a href='mailto:sargsyan1998hayk@gmail.com?subject=For Support team.&body=Please write your text !!!'>{t("Support")}</a></li>
            </ul>
          </div>
        </div>
        <div className='down'>
          <div className='socialPages'>
            <ul>
              <li><a href={socialLinks.instagram || '#'}><img src={insta} alt="Instagram" /></a></li>
              <li><a href={socialLinks.tiktok || '#'}><img src={tiktok} alt="TikTok" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
