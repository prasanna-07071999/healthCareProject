import React, {useContext} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import DoctorContext from '../../context/DoctorContext'
import './index.css'
import Header from '../Header'

const DoctorProfile = () => {
    const {id} = useParams()
    const history = useHistory()
    const {apiResponse} = useContext(DoctorContext)
    const {data, status, errorMsg} = apiResponse
    const doctor = data?.find((each) => String(each.id) === id)
    if (status === 'INPROGRESS') {
    return <p>Loading doctor details...</p>;
    }

    if (status === 'FAILURE') {
        return <p>Error: {errorMsg}</p>;
    }

    if (!doctor) {
        return <p>Doctor not found</p>
    }
    

    const onClickBookAppointment = () =>{
        history.push(`/doctors/${id}/book`)
    }

    return(
        <>
            <Header/>
            <div className='profile-container'>
                <div className='doctor-profile'>
                <div>
                    <img src= {doctor.imageUrl} alt={doctor.name} className='profile-doctor-image'/>
                </div>
                <div>
                    <p className='profile-doctor-name'>{doctor.name}</p>
                    <p className='profile-doctor-specilization'>{doctor.specialization}</p>
                    <p className='profile-doctor-description'>{doctor.description}</p>

                    <p className={`profile-doctor-availability ${ 
                        doctor.availability === 'Available Today'
                        ? 'status-available' : doctor.availability === 'On Leave' ? 
                        'status-leave' : 'status-booked'}`}
                        >{doctor.availability}</p>

                    <button type="button" className='book-appointment' onClick={onClickBookAppointment}>Book Appointment</button>
                </div>
                </div>
            </div>
           
        </>
       
           
    )
}

export default DoctorProfile