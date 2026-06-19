"use client"

import styles from "./MeetBoardSection.module.scss"

import { useState, useEffect } from "react";

import MemberCard from "../../../components/about/MemberCard/MemberCard";
import ExpandedMemberCard from "../../../components/about/ExpandedMemberCard/ExpandedMemberCard";

import MemberCardMobile from "../../../components/about/MemberCardMobile/MemberCardMobile";

import { LCboard } from "../../../../data/teamMembers";

export default function MeetBoardSection() {

    // logic for closing the expanded member cards when user resizes their screen :P
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setSelectedIndex(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {selectedIndex !== null && (
                <ExpandedMemberCard
                    initialIndex={selectedIndex}
                    onClose={() => setSelectedIndex(null)}
                />
            )}

            <div className={styles.meetTheBoard}>
                <h2>Meet the Board!</h2>
                <div className={styles.memberCards}>
                    {LCboard.map((member, i) => (
                        <MemberCard
                            key={member.id}
                            name={member.name}
                            image={member.image}
                            pronouns={member.pronouns}
                            position={member.position}
                            onClick={() => setSelectedIndex(i)}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.mobileMeetTheBoard}>
                <div className={styles.boardHeader}>
                    <h2 className={styles.boardHeading}>Meet the Board!</h2>
                </div>

                <div className={styles.mobileMemberCards}>
                    {LCboard.map((member, i) => (
                        <MemberCardMobile
                            key={member.id}
                            name={member.name}
                            lastName={member.lastName}
                            image={member.noBorderImage}
                            pronouns={member.pronouns}
                            positionShort={member.positionShort}
                            year={member.yearShort} 
                            major={member.majorShort}
                            interests={member.interests}
                            outside={member.outside}
                            funFact={member.funFact}
                            expandedBackground={member.ExpandedMobileBackground}
                        />
                    ))}
                </div>
            </div>


        </>
    );   
}