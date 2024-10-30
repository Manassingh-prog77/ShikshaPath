import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import AboutSection from './About'
import LoginPage from '../components/Login'
import Footer from '../components/Footer'
import SignIn from '../components/Signin'
import Pricing from '../components/Pricing'
import Community from '../components/Community'
import Resources from '../components/Resource'
import Mission from '../defaults/Mission'
import BlogSection from '../defaults/Blog'
import PrivacyAndTerms from '../defaults/Terms'
import Help from '../defaults/Help'

export default function NewUser() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<AboutSection />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/community' element={<Community />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/blog' element={<BlogSection />} />
        <Route path='/privacy' element={<PrivacyAndTerms />} />
        <Route path='/terms' element={<PrivacyAndTerms />} />
        <Route path='/Help' element={<Help />} />
    </Routes>
    <Footer />
    </Router>
    </>
  )
}
