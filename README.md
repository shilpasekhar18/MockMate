# 🎤 MockMate – AI-Powered Mock Interview Platform

MockMate is an AI-powered mock interview platform that simulates real interview experiences using real-time voice interaction. It generates role-specific interview questions, conducts interviews via a voice AI agent, and provides structured, detailed feedback to help users improve their performance and confidence.

---

## 🚀 Features

- 🎙️ **Real-time Voice Interviews**  
  Conduct mock interviews with an AI interviewer using voice-based interaction.

- 🧠 **AI-Generated Interview Questions**  
  Dynamically generates interview questions based on:
  - Job role  
  - Experience level  
  - Tech stack  
  - Interview type (technical, HR, managerial, mixed)

- 📊 **Detailed AI Feedback & Scoring**  
  After the interview, users receive structured feedback including:
  - Overall score (0–100)
  - Category-wise evaluation
  - Strengths
  - Areas for improvement
  - Final assessment

- 🔐 **Authentication & Sessions**  
  Secure user authentication using Firebase Authentication and session cookies.

- 📁 **Interview History Dashboard**  
  View past interviews, feedback reports, and explore upcoming interviews.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**

### Backend & Services
- **Firebase (Admin SDK & Firestore)**
- **VAPI** – Voice AI workflows
- **Google Gemini (via @ai-sdk/google)** – Interview question generation & feedback analysis

### AI & Validation
- **Zod** – Schema validation
- **AI SDK (`generateObject`)** – Structured AI outputs

---



