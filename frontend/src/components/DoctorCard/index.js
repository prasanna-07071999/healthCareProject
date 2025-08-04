import {Link} from 'react-router-dom'


import './index.css'

const DoctorCard = props => {
    const {doctorDetails} = props
    const {imageUrl,name, availability, specialization,id,}= doctorDetails
    return(
    
        <Link to={`/doctors/${id}`} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className='list-container'>
                <img src={imageUrl} alt={name} className='doctor-image' />
                <p className='doctor-name'>{name}</p>
                <p className='doctor-specilization'>{specialization}</p>
                <p className={`doctor-availability ${ 
                    availability === 'Available Today'
                    ? 'card-status-available' : availability === 'On Leave' ? 
                    'card-status-leave' : 'card-status-booked'}`}
                    >{availability}</p>

            </li>
        </Link> 
    )
}

export default DoctorCard