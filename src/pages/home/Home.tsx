import './style.css'

import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import Nav from "../../components/nav/nav";
import About from '../../components/about/About';
import Partners from '../../components/partners/Partners';
import ContactUs from '../../components/contactUs/ContactUs';

const Home = () => {

    return<>
    <div className='homePage'>
        <Nav />
        <Banner />
        <About />
        <Partners />
        <ContactUs />
    </ div>
    <Footer />
    </>
}

export default Home;