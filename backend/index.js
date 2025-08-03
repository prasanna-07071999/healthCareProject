const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


const doctors = [
    {
    id: 1,
    name: "Dr.Sharukh Khan",
    specialization: "Cardiologist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970899/Doctor1_vfv8jf.jpg",
    availability: "Available Today"
  },
  {
    id: 2,
    name: "Dr. Meera",
    specialization: "Pediatrician",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor_2_tm3jw1.jpg",
    availability: "On Leave"
  },
  {
    id: 3,
    name: "Dr. Sunil Kumar",
    specialization: "Nephrologist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor3_skemkr.jpg",
    availability: "On Leave"
  },
   {
    id: 4,
    name: "Dr. RamaKrishna",
    specialization: "Pulmonalogist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor4_quuehq.jpg",
    availability: "On Leave"
  },
   {
    id: 5,
    name: "Dr. Pooja Sharma",
    specialization: "Gynaecologist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor5_thfuhz.jpg",
    availability: "On Leave"
  },
  {
    id: 6,
    name: "Dr. Sravani",
    specialization: "Dermatologist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor_6_x4fooc.jpg",
    availability: "Fully Booked"
  }, 
]

const PORT = 3001
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:3001")
})

app.get('/api/doctors', (request, response) => {
  response.json(doctors)
})

