import { Link } from 'react-router-dom'
import Header from '../Header'
import './index.css'

const HomePage = () => {
    return(
        <>
        <Header/>
        <div className='home-container'>
            <h1 className='heading'>Health<span className='care-text'>Care</span> Hospitals</h1>
            <p className='tag-line'>Your Health, One Click Away</p>
            <Link to="/doctors"><button type="button" className='doctor-button'>Select Your Doctor</button></Link>
        </div> 
        </>
    
    )
}

 export default HomePage