# 📝 Share Wise - Full Stack Blog Platform

<div align="center">
  <h3>🚀 A Modern Blog Platform Built with React & Node.js</h3>
  <p>Share your programming knowledge and connect with fellow developers</p>
  
  ![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)
  ![Node.js](https://img.shields.io/badge/Node.js-20.x-green?style=flat-square&logo=node.js)
  ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=flat-square&logo=mongodb)
  ![Express](https://img.shields.io/badge/Express.js-4.x-black?style=flat-square&logo=express)
</div>

---

## ✨ Features

### 🔐 **Authentication System**
- Secure user registration and login
- JWT-based authentication
- Protected routes and admin access

### 📱 **Responsive Design**
- Mobile-first approach
- Works seamlessly on all devices
- Modern dark theme with purple accents

### ✍️ **Rich Blog Editor**
- WYSIWYG editor with Jodit
- Image upload functionality
- HTML content support
- Real-time preview

### 🎨 **Modern UI/UX**
- Clean and intuitive interface
- Smooth animations and transitions
- Professional typography
- Mobile hamburger menu

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Jodit Editor** - Rich text editor

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **bcryptjs** - Password hashing

---

## 🚀 Quick Start

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas)
- **Git**

### 📦 Installation

#### 1️⃣ Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/share-wise-blog.git
cd share-wise-blog
\`\`\`

#### 2️⃣ Backend Setup
\`\`\`bash
cd backend
npm install
\`\`\`

Create a \`.env\` file in the backend directory:
\`\`\`env
MONGODB_URI=mongodb://localhost:27017/blogapp
JWT_SECRET=your-super-secret-jwt-key-here
PORT=3000
NODE_ENV=development
\`\`\`

#### 3️⃣ Frontend Setup
\`\`\`bash
cd ../frontend
npm install
\`\`\`

#### 4️⃣ Start the Application

**Terminal 1 - Backend:**
\`\`\`bash
cd backend
npm run dev
\`\`\`

**Terminal 2 - Frontend:**
\`\`\`bash
cd frontend
npm run dev
\`\`\`

🎉 **Your app is now running!**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

---

## 📖 Usage Guide

### 🔑 **Getting Started**
1. **Sign Up**: Create a new account with username, name, email, and password
2. **Login**: Access your account with email and password
3. **Explore**: Browse existing blog posts on the homepage
4. **Read**: Click on any blog post to read the full content

### ✍️ **Creating Blog Posts**
1. Click **"Upload Blog"** in the navigation
2. Enter admin secret: \`admin1234\`
3. Fill in the blog details:
   - **Title**: Your blog post title
   - **Description**: Brief summary of your post
   - **Content**: Use the rich text editor to write your content
   - **Image**: Upload a featured image
4. Click **"Create Blog"** to publish

### 🎨 **Admin Features**
- Admin secret: \`admin1234\`
- Create and manage blog posts
- Rich text editing with formatting options
- Image upload and management

---

## 📁 Project Structure

\`\`\`
share-wise-blog/
├── 📂 backend/
│   ├── 📂 models/          # Database models
│   ├── 📂 routes/          # API routes
│   ├── 📂 uploads/         # Uploaded images
│   ├── 📄 app.js           # Express app setup
│   └── 📄 .env             # Environment variables
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/  # React components
│   │   ├── 📂 pages/       # Page components
│   │   ├── 📂 images/      # Static images
│   │   └── 📄 App.jsx      # Main app component
│   └── 📄 package.json     # Dependencies
└── 📄 README.md            # You are here!
\`\`\`

---

## 🔧 Configuration

### 🗄️ **Database Setup**

#### Option 1: Local MongoDB
1. Install MongoDB Community Server
2. Start MongoDB service
3. Use connection string: \`mongodb://localhost:27017/blogapp\`

#### Option 2: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and update \`.env\`

### 🔐 **Environment Variables**
\`\`\`env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Server
PORT=3000
NODE_ENV=development
\`\`\`

---

## 📱 Responsive Design

Share Wise is built with mobile-first approach:

- **📱 Mobile** (320px - 767px): Single column layout, hamburger menu
- **📱 Tablet** (768px - 1023px): Optimized for touch interactions
- **💻 Desktop** (1024px+): Full-featured layout with sidebar navigation

---

## 🎨 Customization

### 🎨 **Theme Colors**
The app uses CSS custom properties for easy theming:
\`\`\`css
:root {
  --purple-600: #9333ea;  /* Primary color */
  --purple-700: #6d28d9;  /* Hover states */
  --bg-2: #0c0c0c;        /* Card backgrounds */
}
\`\`\`

### 🔧 **Admin Secret**
Change the admin secret in \`frontend/src/pages/UploadBlog.jsx\`:
\`\`\`javascript
if (adminSecret === "your-new-secret") {
  // Admin access granted
}
\`\`\`

---

## 🚀 Deployment

### 🌐 **Frontend Deployment (Vercel)**
\`\`\`bash
cd frontend
npm run build
# Deploy to Vercel, Netlify, or your preferred platform
\`\`\`

### 🖥️ **Backend Deployment (Railway/Heroku)**
\`\`\`bash
cd backend
# Set environment variables on your platform
# Deploy using your preferred service
\`\`\`

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (\`git checkout -b feature/amazing-feature\`)
3. **💾 Commit** your changes (\`git commit -m 'Add amazing feature'\`)
4. **📤 Push** to the branch (\`git push origin feature/amazing-feature\`)
5. **🔄 Open** a Pull Request

### 🐛 **Bug Reports**
Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Share Wise Team**
- 🌐 Website: [sharewise.dev](https://sharewise.dev)
- 📧 Email: contact@sharewise.dev
- 🐦 Twitter: [@ShareWiseDev](https://twitter.com/sharewisedev)

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **MongoDB** for the flexible database
- **Tailwind CSS** for the utility-first approach
- **Jodit** for the rich text editor
- **All contributors** who help improve this project

---

## 📊 Project Stats

- **⭐ Stars**: Give us a star if you like this project!
- **🍴 Forks**: Fork and customize for your needs
- **🐛 Issues**: Report bugs and request features
- **📈 Version**: 1.0.0

---

<div align="center">
  <h3>🚀 Ready to start blogging?</h3>
  <p>Clone the repo and start sharing your knowledge with the world!</p>
  
  **Happy Coding! 💻✨**
</div>
