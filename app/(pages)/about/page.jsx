"use client"

import { useState, useEffect } from "react";

import HeroSection from "../../components/about/HeroSection/HeroSection";
import ViewToggleSection from "../../components/about/ViewToggleSection/ViewToggleSection";

import { VIEW_TOGGLE_BUTTONS } from "../../../data/ViewToggleButtonData";

export default function AboutPage() {
    const [selectedIndex, setSelected] = useState(0);

    const ActiveView = VIEW_TOGGLE_BUTTONS[selectedIndex].view;

    // Handles the responsiblity of switching the tabs depending on the hash
    useEffect(() => {
        function handleHashChange() {
            if (window.location.hash !== "#faq")
                setSelected(0);
            else
                setSelected(1);
        }

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    // Handles the responsiblity of scrolling down to the correct seection after tab is switched (Doesn't always fire!)
    useEffect(() => {
        const hash = window.location.hash;

        if (!hash) return;

        const element = document.querySelector(hash);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [selectedIndex]);

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
        </>
    )
}