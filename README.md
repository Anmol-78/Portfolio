# 📖 Portfolio Profile

This is my **personal portfolio website** ✨, built to showcase my **skills, projects, achievements, and experience** as a developer.  
The website serves as a central hub for recruiters, collaborators, and community members to learn more about me 🚀.  

## 🎯 Key Highlights  
- 🏠 **Homepage** – Clean, minimal landing section with intro  
- 👨‍💻 **About Me** – Brief background, skills, and interests  
- 📂 **Projects Showcase** – Highlighting my best works with live links & GitHub repos  
- 📞 **Contact Form** – Integrated with **EmailJS** for direct communication  
- 📱 **Responsive Design** – Works seamlessly on desktop, tablet, and mobile  

---
## 🛠️ Tech Stack  

- **Frontend:** ⚛️ React, 🎨 Tailwind CSS, Vite  
- **Hosting:** ▲ Vercel  
- **Email Service:** 📧 EmailJS  

---
## 📂 File Structure  

```bash
Portfolio/  
├── 📁 public/                 # Static assets (favicon, images, etc.)  
├── 📁 src/  
│   ├── 🧩 components/          # Reusable UI components  
│   ├── 📄 pages/               # Pages (Home, About, Projects, Contact)  
│   ├── 🎨 styles/              # Tailwind / custom CSS  
│   ├── ⚙️ utils/               # Helper functions (if any)  
│   ├── 📬 services/            # EmailJS integration service  
│   └── ⚛️ App.jsx              # Main React entry  
│  
├── .env.example               # 🔐 Example environment variables  
├── package.json               # Project dependencies  
├── tailwind.config.js         # Tailwind CSS configuration  
└── README.md                  # Project documentation
```


 ## ⚙️ Environment Variables

This project uses EmailJS for contact form functionality.

Create a .env file in the root directory and add:
```
# EmailJS Environment Variables
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 💻 Installation (Local Setup)

Follow these steps to run the project locally:
```
git clone https://github.com/Anmol-78/Portfolio.git
cd Portfolio
```
### 2. Install dependencies 📦
```
npm install
```
```
### 3.  Setup environment variables ⚙️

Create a .env file in the root folder.

Copy values from .env.example and replace with your EmailJS credentials.

### 4. Start the development server 🚀
```
npm run dev

## 🚀 Deployment
```
Deployed using Vercel:

Push your code to GitHub.

Go to Vercel
 → Create New Project → Import your GitHub repo.

Add environment variables in Vercel dashboard.

Deploy 🎉
```
## 🎥 Demo
🌐 Live Link

[![Portfolio Live](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://portfolio-ashen-two-27.vercel.app/)  

### 🤝 Contributing
```
Contributions are welcome! 🚀

Fork the repo 🍴

Create a branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m "Add feature")

Push to your branch (git push origin feature/YourFeature)

Open a Pull Request ✅
```

## 📜 License

This project is licensed under the MIT License.

Developed with ❤️ by [Anmol Goyal](https://github.com/Anmol-78)
