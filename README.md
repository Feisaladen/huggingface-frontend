# Edu Bot  

Edu Bot is an **AI-powered tutor** designed to support African children with accessible, interactive, and culturally relevant education. It aims to bridge the gap in learning resources by providing a digital tutor that works across multiple devices and environments.  

---

## Features  
- **Homework Assistance** – Provides step-by-step answers to questions across subjects such as mathematics, science, languages, and history.  
- **Multilingual Support** – Supports English, Kiswahili, French, Arabic, Somali, and other regional languages.  
- **Interactive Learning** – Includes quizzes, exercises, and storytelling to make learning engaging.  
- **Offline-Friendly** – Optimized for low bandwidth environments and can be adapted for SMS/USSD access.  
- **Culturally Relevant** – Content and examples tailored to African contexts and experiences.  

---

## Why Edu Bot?  
Many African students face barriers to quality education due to:  
- Limited access to qualified teachers.  
- High cost of textbooks and resources.  
- Connectivity challenges in rural areas.  

Edu Bot addresses these challenges by offering:  
- Affordable, always-available tutoring.  
- Easy access to educational resources.  
- Scalable solutions for schools and communities.  

---

## Tech Stack  
- **Backend**: Node.js / Python (FastAPI), deployed on **Render**  
- **Frontend**: React + Tailwind CSS, deployable on **Vercel**  
- **AI Models**: Hugging Face (via API key integration)  

---

## Environment Variables  

Create a `.env` file in the backend folder and add:  
```env
HUGGINGFACE_API_KEY=your_api_key_here
PORT=5000
