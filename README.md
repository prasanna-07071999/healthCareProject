# Doctor Appointment App

This is my **Healthcare Appointment Booking Application** built with:

- **Backend**: Node.js & Express.js
- **Frontend**: React, HTML, CSS, JavaScript

The application allows users to view a list of doctors, explore their profiles, and book appointments — all through a smooth, responsive user interface.

---

##  Features

-  View and select doctors by specialization
- Homepage with header navigation (`Home`, `Doctors`)
- Routing to different pages using React Router
- Detailed doctor profile with image and description
- Appointment booking form with confirmation popup
- Fully responsive design for laptops, iPads, and mobile devices

---

## Navigation Flow

1. **Home Page** – Contains a header with navigation links:
   - `Home`
   - `Doctors`
2. **Select Your Doctor Button** – Navigates to the **Doctor List Page**
3. **Doctor List Page** – Displays all available doctors with status and photo and specialization.
4. **Doctor Profile Page** – Opens when clicking on a doctor’s card
5. **Book Appointment Button** – Leads to an appointment form
6. **Appointment Form** – User fills in details and submits
7. **Confirmation Popup** – Appears after successful submission

---

## Tech Stack

### Backend:
- Node.js
- Express.js
- (Optional) SQLite
- RESTful API routes

### Frontend:
- React.js
- HTML5
- CSS3
- JavaScript
- React Router DOM

---

## 📂 Project Structure

/project-root
├── /frontend → React App (UI)
└── /backend → Node.js Server (API)
└── README.md → This file

## Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Run the Backend
cd backend
npm install
npx nodemon index.js

3. Run the Frontend
cd frontend
npm install
npm start

**API Endpoints**
GET /api/doctors – Fetch all doctors

GET /api/doctors/:id – Fetch a single doctor's profile

GET /doctors/1/book – Book an appointment


** Responsive Design** 

=> Mobile Friendly

=> Tablet Optimized

=> Desktop Compatible

