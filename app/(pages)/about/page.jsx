"use client"

import { useState, useEffect } from "react";

import Footer from "../../components/footer/Footer";

import HeroSection from "../../components/about/HeroSection/HeroSection";
import ViewToggleSection from "../../components/about/ViewToggleSection/ViewToggleSection";

import { VIEW_TOGGLE_BUTTONS } from "../../../data/ViewToggleButtonData";

export default function AboutPage() {
    const [selectedIndex, setSelected] = useState(0);

    const ActiveView = VIEW_TOGGLE_BUTTONS[selectedIndex].view;

    return (
        <>
            <HeroSection />
            <ViewToggleSection 
                buttonsData={VIEW_TOGGLE_BUTTONS} 
                selectedIndex={selectedIndex}
                setSelected={setSelected}
            />
            
            <div>
                <ActiveView />
            </div>

            <Footer/>

        </>
    )
}