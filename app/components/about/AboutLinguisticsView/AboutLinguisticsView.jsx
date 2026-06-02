"use client"

import styles from "./AboutLinguisticsView.module.scss"

import ClubMissionSection from "../ClubMissionSection/ClubMissionSection";
import MeetBoardSection from "../MeetBoardSection/MeetBoardSection";

import { CLUB_MISSION_DATA } from "../../../../data/ClubMissionData";

import { useState } from "react";

export default function AboutLinguisticsView() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <>
            <ClubMissionSection 
                title={CLUB_MISSION_DATA.title}
                description={CLUB_MISSION_DATA.description}
                image={CLUB_MISSION_DATA.image}
                image_alt={CLUB_MISSION_DATA.image_alt}
            />

            <MeetBoardSection />    
        </>
    )
}