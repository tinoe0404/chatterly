Chatterly — Real-Time Chat App
Chatterly is a fast, modern real-time chat application with custom JWT auth, live messaging via Socket.io, typing indicators, online presence, and image uploads.
Built with Node.js, Express, MongoDB, and a React + Tailwind CSS frontend using Zustand for state management.

🚀 Features
Custom JWT authentication
Real-time messaging (Socket.io)
Online presence + typing indicators
Image/media uploads
Rate-limited API
Responsive React UI (Tailwind + Zustand)

chatterly/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── emails/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── public/
    ├── src/
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── eslint.config.js
    └── package.json


🧰 Tech Stack
Frontend: React, Tailwind CSS, Zustand, Vite
Backend: Node.js, Express, MongoDB, Socket.io
Other: JWT, Multer/Cloudinary, Resend Email API, Arcjet security

⚙️ Environment Variables (.env)
Create a .env file in the backend folder using the template below:
# Server
PORT=3000
NODE_ENV=development
# Database
MONGO_URI=your_mongo_connection_string
# JWT
JWT_SECRET=your_jwt_secret
# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_sender_email
EMAIL_FROM_NAME=your_sender_name
# Frontend URL
CLIENT_URL=http://localhost:5173
# Cloudinary (Uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
# Arcjet (Security / Rate Limiting)
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

⚙️ Setup
Backend:
cd backend
npm install
npm run dev

Frontend:
cd frontend
npm install
npm run dev

📦 Production
Frontend:
npm run build

Backend:
npm run start
