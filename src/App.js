import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Practice from './components/Practice';
import TopicDetails from './components/TopicDetails';
import PDFUploader from './components/PDFUploader';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <Dashboard />
        <Practice />
        <TopicDetails topic="Mathematics" />
        <PDFUploader />
        <Chatbot />
      </main>
    </div>
  );
};

export default App;