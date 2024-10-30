import React from 'react'
import NavbarM from '../components/NavbarM'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeM from './HomeM'
import FooterM from '../components/FooterM'
import Explore from './Explore'
import Science from './Science'
import Humanities from './Humanities'
import Profile from './Profile'
import AiTutor from './Aitutor'
import DoubtSolving from '../components/DoubtSolving'
import SyllabusAnalyzer from '../components/SyllabusAnalyser'
import Attendance from './Attendance'
import Details from '../components/Detail'
import Example from '../components/Chapter'
import PendingSubmission from '../components/Pending'
import Assignment from '../components/Assignment'
import Practise from '../components/Practise'
import Prep from '../components/Prep'
import Progress from '../components/Progress'

export default function User() {
  return (
    <>
    <Router>
    <NavbarM />
    <Routes>
        <Route path='/' element={<HomeM />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/science' element={<Science />} />
        <Route path='/Humanities' element={<Humanities />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/aitutor' element={<AiTutor />} />
        <Route path='/DoubtSolving' element={<DoubtSolving />} />
        <Route path="/Syllabus" element={<SyllabusAnalyzer />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/Detail' element={<Details />} />
        <Route path='/Chapter' element={<Example />} />
        <Route path='/Pending' element={<PendingSubmission />} />
        <Route path='/assignments' element={<Assignment />}></Route>
        <Route path='/practice' element={<Practise />} />
        <Route path='/Prep' element={<Prep />}></Route>
        <Route path='/progress' element={<Progress />} />
        
    </Routes>
    <FooterM />
    </Router>
    </>
  )
}
