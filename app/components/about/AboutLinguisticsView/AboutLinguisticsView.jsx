import styles from "./AboutLinguisticsView.module.scss"

import ClubMissionSection from "../ClubMissionSection/ClubMissionSection";
import MeetBoardSection from "../MeetBoardSection/MeetBoardSection";

import { CLUB_MISSION_DATA } from "../../../../data/ClubMissionData";

export default function AboutLinguisticsView() {
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