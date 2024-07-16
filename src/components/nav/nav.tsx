import React, { useEffect } from 'react';
import './style.css';
import logo from '../../assets/logo/logo.png';
import { useTranslation } from 'react-i18next';

const Nav: React.FC = () => {
  const { i18n } = useTranslation("global");

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); 
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); 
    }
  }, [i18n]);

  return (
    <nav className='nav'>
      <div className='left'>
        <a href='/'><img src={logo} alt='logo' /></a>
      </div>
      <div className='right'>
        <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="am">AM</option>
        </select>
      </div>
    </nav>
  );
}

export default Nav;
