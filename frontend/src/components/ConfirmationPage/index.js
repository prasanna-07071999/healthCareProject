import './index.css'
import {useState} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'

const ConfirmationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        city: '',
        date: '',
        timeSlot: '',
        gender: '',
    })
    const [isSubmitted, setIsSubbmitted] = useState(false)

    const onChangeInput = event => {
        const {name, value} = event.target
        setFormData(prevState => ({...prevState, [name]: value})) 
    }


    const onClickSubmitForm = event => {
        event.preventDefault()
        setIsSubbmitted(true)
    }

    return (
        <>
            <Header />
            <div className='form-container'>
            <div className='confirmation-container'>
            <h1 className='form-title'>Appointment Form</h1>
            <form className='confirmation-form' onSubmit={onClickSubmitForm}>
                <p className='name-text'>Name</p>
                <input 
                    type='text' 
                    className='input-bar' 
                    name="name" 
                    placeholder='Enter your Name' 
                    onChange={onChangeInput}
                />
                <p className='name-text'>Age</p>

                <input 
                    type="number" 
                    className='input-bar' 
                    placeholder='Enter your Age' 
                    name="age" 
                    onChange={onChangeInput}
                />
                <br/>
                <p className='name-text'>Gender</p>
                <input 
                    type="radio" 
                    id="genderMale" 
                    value="Male" 
                    className='gender-style' 
                    name='gender'
                    onChange={onChangeInput}
                />
                    <label for="genderMale">Male</label>
                <input 
                    type="radio" 
                    id="genderFemale" 
                    value="Female" 
                    class="gender-radio" 
                    name='gender'
                    onChange={onChangeInput}
                />
                    <label for="genderFemale">Female</label>
                <input 
                    type="radio" 
                    id="genderOthers" 
                    value="Others" 
                    class="gender-radio" 
                    name='gender'
                    onChange={onChangeInput}
                />
                    <label for="genderOthers">Others</label>
                <br/>
                <p className='name-text'>City:</p>
                <input 
                    type='text' 
                    name="city" 
                    className='input-bar' 
                    placeholder='Enter your city Name' 
                    onChange={onChangeInput}
                />
                <p className='name-text'>Date:</p>
                <input 
                    type="date" 
                    name="date" 
                    onChange={onChangeInput} 
                    className='date-style'
                />
                <p className='name-text'>Time Slot:</p>

                <select name="timeSlot" onChange={onChangeInput} className='time-style'>
                    <option value="select Your slot" selected>select your time slot</option>
                    <option value= '9AM-10AM'>9 AM-10 AM</option>
                    <option value= '10AM-11AM'>10 AM-11 AM</option>
                    <option value= '11AM-12AM'>11 AM-12 PM</option>
                    <option value= '12AM-1PM'>12 PM-1 PM</option>
                    <option value= '3PM-4PM'>5 PM-6 PM</option>
                    <option value= '4PM-5PM'>6 PM-7 PM</option>
                    <option value= '5PM-6PM'>7 PM-8 PM</option>
                </select>
                <br/>
                <div className='book-button-container'>
                    <button className='book-button' type='submit'>Book Appointment</button>
                </div> 
            </form>

            <Popup
                modal
                open={isSubmitted}
            >
            {close => (
            <div className='popup-container'>
                <button
                    className="cross-button"
                    data-testid="closeButton"
                    type="button"
                    onClick={() => close()}
                >
                <IoMdClose />
                </button>
                <h1 className='popup-title'>Appointment Confirmed</h1>
                <p className='result-style'><span className='field-style'>Name: </span> {formData.name}</p>
                <p className='result-style'><span className='field-style'>Age: </span> {formData.age}</p>
                <p className='result-style'><span className='field-style'>City: </span> {formData.city}</p>
                <p className='result-style'><span className='field-style'>Gender: </span> {formData.gender}</p>
                <p className='result-style'><span className='field-style'>Date: </span> {formData.date}</p>
                <p className='result-style'><span className='field-style'>Time Slot: </span>{formData.timeSlot}</p>
            </div>
            )}
      </Popup>

        </div>
        </div>
        </>
        
        
    )
}

export default ConfirmationPage