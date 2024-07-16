import './style.css'
import img from './image 54.png'
import { useTranslation } from 'react-i18next';
const Partners:React.FC = () => {
    const {t } = useTranslation("global");

    return <>
    <div className="partners">
        <h1>{t("PARTNERS")}</h1>
        <h2>{t("MostPopularItems")}</h2>
        <div className='partnerCards'>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <div className='partnerCard'>
                <div className='partnerImg'>
                    <img src={img} alt='img' />
                </div>
                <div className='partnerName'>
                    <h2>Name</h2>
                    <button>{t("GOTOMENU")}</button>
                </div>
            </div>
            <button className='showMore'>{t("Showmore")}</button>
        </div>
    </div>
    </>
}
export default Partners;