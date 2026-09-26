import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ExpertSection from './ExpertSection'
import YearsSection from './YearsSection'
import WhychooseSection from './WhychooseSection'
import Services from './Services'
import ServiceHeader from './ServiceHeader'
import ServiceSection from './ServiceSection'
import OurprojectsSection from './OurprojectSection'
import HousingSection from './HousingSection'
import OurlocationSection from './OurlocationSection'
import ClientSection from './ClientSection'
import HeaderSection from './HeaderSection'
import FooterSection from './FooterSection'
import StateCount from './StateCount'
import ApiIntegeration from './ApiIntegeration'
import ApiTable from './ApiTable'
import ApiCard from './ApiCard'
import LoginPage from './LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <HeaderSection/>
    <ExpertSection/>
    <YearsSection/>
    <WhychooseSection/>
    <ServiceSection/>
    <OurprojectsSection/>
    <HousingSection/>
    <OurlocationSection/>
    <ClientSection/>
    <FooterSection/>
    <StateCount/>
    <ApiIntegeration/>
    <ApiTable/>
    <ApiCard/>
    <LoginPage/>
    </>
  )
}
export default App