import './style.css'
import logo from '../../assets/logo/logo.png'
import insta from '../../assets/icons/instagram.png'
import tiktok from '../../assets/icons/tiktok.png'
import { useTranslation } from 'react-i18next'
const Footer:React.FC = () => {
    const { t } = useTranslation("global");

    return <div className='footer'>
            <div className='footer0'>
                <div className='up'>
                    <div className='left'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='right'>
                    <ul>
                            <li><a href='/'>{t("About")}</a></li>
                            {/* <li><a  href='/'>Company</a></li> */}
                            <li><a href='mailto:sargsyan1998hayk@gmail.com?subject=For Support team.&body=Please write your text !!!'>{t("Support")}</a></li>
                        </ul>
                    </div>
                </div>
                <div className='down'>
                    <div className='socialPages'>
                    <ul>
                            <li><a href='/'><img src={insta} alt="" /></a></li>
                            <li><a href='/'><img src={tiktok} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
}

export default Footer;