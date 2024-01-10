"use client"
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css'; // Import the styles
import Video from "@/components/Video";
import React from 'react'

const HomePage = () => {

    return (
        <>
            <ScrollUp />
            <Hero />
            <Features />
            <AboutSectionOne />
            <Pricing />
            <Video />
            <Brands />
            <AboutSectionTwo />
            <Testimonials />
            <Blog />
            <Contact />
           
        </>
    )
}

export default HomePage
