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
    availability: "Available Today",
    description: "Dr. Sharukh Khan has over 15 years of experience in cardiology. He has performed more than 500 successful heart surgeries and is known for his precision and care. He maintains a 98% surgery success rate."
  },
  {
    id: 2,
    name: "Dr. Meera",
    specialization: "Pediatrician",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor_2_tm3jw1.jpg",
    availability: "On Leave",
    description: "Dr. Meera is a caring pediatrician with 10 years of experience. She specializes in child nutrition, asthma, and allergy treatment. Over 5,000 children have benefitted from her friendly approach."
  },
  {
    id: 3,
    name: "Dr. Sunil Kumar",
    specialization: "Nephrologist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor3_skemkr.jpg",
    availability: "On Leave",
    description: "With 14 years of experience, Dr. Sunil Kumar has treated over 3,000 kidney-related patients. He is known for managing chronic kidney diseases and dialysis with minimal complications."
  },
  {
    id: 4,
    name: "Dr. RamaKrishna",
    specialization: "Pulmonalogist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor4_quuehq.jpg",
    availability: "On Leave",
    description: "Dr. Ramakrishna has helped over 4,500 patients recover from chronic lung conditions. His expertise in treating asthma, bronchitis, and COVID-related lung issues is highly appreciated."
  },
  {
    id: 5,
    name: "Dr. Pooja Sharma",
    specialization: "Gynaecologist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor5_thfuhz.jpg",
    availability: "On Leave",
    description: "Dr. Pooja Sharma is a leading gynaecologist with 12 years of experience in handling high-risk pregnancies and laparoscopic surgeries. She has assisted in over 1,000 successful deliveries."
  },
  {
    id: 6,
    name: "Dr. Sravani",
    specialization: "Dermatologist",
    image: "https://res.cloudinary.com/dgdoej1q8/image/upload/v1753970959/doctor_6_x4fooc.jpg",
    availability: "Fully Booked",
    description: "Dr. Sravani is a dermatologist with 9 years of expertise in treating acne, eczema, and skin allergies. She has improved the skin health of more than 2,000 patients with personalized care."
  }
];


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/api/doctors', (request, response) => {
  response.json(doctors)
})