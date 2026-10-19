"use client"

import { useState } from "react";

import HeroSection from "../HeroSection/HeroSection";
import ViewToggleSection from "../ViewToggleSection/ViewToggleSection";

import { VIEW_TOGGLE_BUTTONS } from "../../../../data/ViewToggleButtonData";
import { HERO_SECTION_DATA } from "../../../../data/AboutHeroSectionData";

export default function AboutContent({ boardMembers, faqs }) {
    const [selectedIndex, setSelected] = useState(0);

    const ActiveView = VIEW_TOGGLE_BUTTONS[selectedIndex].view;

    return (
        <>
            <HeroSection 
                title={HERO_SECTION_DATA.title}
                description={HERO_SECTION_DATA.description}
            />
    
            <ViewToggleSection 
                buttonsData={VIEW_TOGGLE_BUTTONS} 
                selectedIndex={selectedIndex}
                setSelected={setSelected}
            />
            
            <ActiveView boardMembers={boardMembers} faqs={faqs} />
        </>
    )
}
