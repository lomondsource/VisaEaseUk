import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisaTypes from './pages/VisaTypes';
import DocumentChecker from './pages/DocumentChecker';
import VisaRules from './pages/VisaRules';
import HelpCenter from './pages/HelpCenter';
import Dashboard from './pages/Dashboard';
import BusinessVisaDetails from './components/BusinessVisaDetails';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visa-types" element={<VisaTypes />} />
          <Route path="/visa-types/business/:id" element={<BusinessVisaDetails />} />
          <Route path="/document-checker" element={<DocumentChecker />} />
          <Route path="/visa-rules" element={<VisaRules />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;