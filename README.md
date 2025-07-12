# 📚 MERN Stack Project – RAG LLM Website

This is a MERN (MongoDB, Express.js, React, Node.js) stack project that integrates with an OpenAI-powered RAG (Retrieval-Augmented Generation) system.

## 📁 Project Structure

projet-rag-llm-website/
│
├── backend/          # Express.js server + API + .env (not included)
└── frontend/         # React frontend

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/boubnacer/projet-rag-llm-website.git
cd projet-rag-llm-website

### 2. Install dependencies

Backend:

cd backend  
npm install

Frontend:

cd ../frontend  
npm install

### 3. Setup environment variables

In the `backend/` folder, create a `.env` file with the following content:

OPENAI_API_KEY=your_openai_api_key  
MONGODB_URI=your_mongodb_uri  
PORT=5000

⚠️ Do not share your .env file or keys publicly.

### 4. Run the project

Backend:

cd backend  
npm run dev

Frontend (in another terminal):

cd frontend  
npm start

## 📚 Features

- Upload and store documents  
- Ask questions using OpenAI API (FLAN-T5 or LLaMA3)  
- Uses RAG (Retrieval-Augmented Generation)  
- Gradio or Streamlit UI (optional)

## 🛠️ Tech Stack

- Frontend: React, Tailwind CSS (or Bootstrap)  
- Backend: Node.js, Express.js, MongoDB  
- LLM API: OpenAI, FAISS, Langchain (optional)

## ✅ Notes

- You must create your `.env` file inside the `backend/` folder.  
- You can use a free MongoDB cluster from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  


