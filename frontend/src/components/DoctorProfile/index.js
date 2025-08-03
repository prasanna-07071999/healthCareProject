import React, {useContext} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import DoctorContext from '../../context/DoctorContext'
import './index.css'

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
        <div className='doctor-profile'>
            <div>
                <img src= {doctor.imageUrl} alt={doctor.name} className='profile-doctor-image'/>
            </div>
            <div>
                <p className='profile-doctor-name'>{doctor.name}</p>
                <p className='profile-doctor-availability'>{doctor.availability}</p>
                <p className='profile-doctor-specilization'>{doctor.specialization}</p>
                <button type="button" className='book-appointment' onClick={onClickBookAppointment}>Book Appointment</button>
            </div>
        </div>
           
    )
}

export default DoctorProfile