import { useContext} from "react";
import {ClipLoader} from 'react-spinners'
import DoctorCard from '../DoctorCard'
import {DoctorContext} from '../../context/DoctorContext';
import Header from "../Header";


import './index.css'

const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: "INPROGRESS",
    success: "SUCCESS",
    failure: "FAILURE",
}

const DoctorsList = () => {
    const {apiResponse} = useContext(DoctorContext)

    const renderLodingView = () => {
        return(
            <div>
                <ClipLoader  color="#000000" size="50" loading={true}/>
            </div>
        )}

    const renderSuccessView = () => {
        const {data} = apiResponse
        return (
            <div className="doctor-list-container">
                {data.map((doctor) => (
                    <DoctorCard doctorDetails={doctor} key={doctor.id}/>
                ))}
            </div>
        )}

    const renderFailureView = () => {
        const {errorMsg} = apiResponse
            return (
                <div>   
                    <h1>{errorMsg}</h1>
                </div>
        )}

    const renderLandingPage = () => {
        const {status} = apiResponse
        console.log(status)
        switch(status){
            case apiStatusConstants.inProgress:
                return renderLodingView()
            case apiStatusConstants.success:
                return renderSuccessView()
            case apiStatusConstants.failure:
                return renderFailureView()
            default: 
                return null
        }
    }

    return (    
                <>
                <Header/>
                <div>
                {renderLandingPage()}
                </div> 
                </>
                
            )
}

export default DoctorsList