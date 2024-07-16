import './style.css'
import img from './Group 52.png'
const About:React.FC = () => {
    return<>
    <div className='about'>
    <div className="left">
        <img src={img} alt='img'/>
    </div>
    <div className="right">
        <h1>ABOUT US</h1>
        <h2 className=''>What Our Customers Say About Us</h2>
        <p>“Fudo is the best. Besides the many and delicious
               meals, the service is also very good, especially in
               the very fast delivey.
        </p>
        <p>
               I highly recommend Fudo to you”. is the best.
               Besides the many and delicious meals, the service
               is also very good, especially in the very fast delivey.</p>

        <div><a href='/' className='readmore'>Read More</a></div>
    </div>
    </div>
      
    </>
}

export default About;