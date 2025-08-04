
import React, {useEffect, useState } from "react";


const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: "INPROGRESS",
    success: "SUCCESS",
    failure: "FAILURE",
}


export const DoctorContext = React.createContext()

export const DoctorProvider = ({children}) => {
    const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

    useEffect( () => {
        const getDoctorsData = async() => {
            setApiResponse({
                status: apiStatusConstants.inProgress,
                data:null,
                errorMsg: null,
            })
            const url="https://heathcarebackend-production.up.railway.app/api/doctors"
            const response = await fetch(url)
            const fetchedData = await response.json()
             const formattedData = fetchedData.map(eachDoctor => ({
                id: eachDoctor.id,
                name: eachDoctor.name,
                imageUrl: eachDoctor.image,
                specialization: eachDoctor.specialization,
                availability: eachDoctor.availability,
                description: eachDoctor.description
            }))

            if(response.ok){
                setApiResponse((prevApiResponse) => ({
                    ...prevApiResponse,
                    status: apiStatusConstants.success,
                    data: formattedData,
                }))
            } else{
                setApiResponse((prevApiResponse) => ({
                    ...prevApiResponse,
                    status: apiStatusConstants.failure,
                    errorMsg: fetchedData.error_msg
                }))
            }
        }
    getDoctorsData()   
    }, [])

return (
    <DoctorContext.Provider value={{apiResponse, setApiResponse}}>
        {children}
    </DoctorContext.Provider>
    )
}


export default DoctorContext