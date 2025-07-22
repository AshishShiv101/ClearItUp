# Clear It Up 🧹🖼️

[🔗 Live Demo](https://clear-it-up-6jwj.vercel.app/)

**Clear It Up** is a modern full-stack image background remover built with:
- React + Tailwind (frontend)
- Express + MongoDB (backend)
- Clerk for authentication
- Razorpay for credit purchases
- ClipDrop API for image background removal
- JWT for user validation and route protection

---

## 🖼️ Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/0b746efc-1217-4402-b6e9-2c84c3493a88" alt="Upload Page" width="90%" />
  <br/><br/>
  <img src="https://github.com/user-attachments/assets/20bb88fd-b3d1-4bc8-a83a-235e550e36ea" alt="Processing State" width="90%" />
  <br/><br/>
  <img src="https://github.com/user-attachments/assets/04f709ab-ec7c-45b5-a168-8886572b7675" alt="Result Page" width="90%" />
  <br/><br/>
  <img src="https://github.com/user-attachments/assets/3d37dcd6-680e-49ce-952e-896e69b6070d" alt="Buy Credits Page" width="90%" />
</div>

---

## ✨ Features

### 🔒 Authentication
- User login/signup via Clerk
- JWT token management
- Webhook integration to sync Clerk users with MongoDB

### 🖼️ Background Removal
- Upload any image
- Background is removed using ClipDrop API
- Result image displayed with download option
- One credit used per image

### 🪙 Credit System
- Users start with 10 free credits
- Buy more using Razorpay
- Credit balance is stored and updated in MongoDB

### 💳 Payment Integration
- Razorpay for secure checkout
- Backend validates plan and user before proceeding
- Transaction details stored

### 🔁 Webhooks
- Clerk webhook keeps MongoDB user collection in sync
- Credit deduction handled after background removal

### 🌑 Constant Dark Theme
- Tailwind-based dark UI
- Responsive layout across devices
- Spinner shown while image is being processed

### 📂 File Handling
- Uses Multer to handle image uploads in backend
- File is streamed directly to ClipDrop
- Result image returned as base64

---

## 🧱 Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React, Tailwind CSS, Axios   |
| Backend     | Node.js, Express.js, MongoDB |
| Auth        | Clerk.dev, JWT               |
| API         | ClipDrop                     |
| Payment     | Razorpay                     |
| Uploads     | Multer, FormData             |

---
