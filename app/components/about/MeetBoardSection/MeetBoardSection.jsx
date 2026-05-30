"use client"

import styles from "./MeetBoardSection.module.scss"

import { useState } from "react";

import MemberCard from "../../../components/about/MemberCard/MemberCard";
import ExpandedMemberCard from "../../../components/about/ExpandedMemberCard/ExpandedMemberCard";

import { LCboard } from "../../../../data/teamMembers";

export default function MeetBoardSection() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <>
            {selectedIndex !== null && (
                <ExpandedMemberCard
                    initialIndex={selectedIndex}
                    onClose={() => setSelectedIndex(null)}
                />
            )}

            <div id="board" className={styles.meetTheBoard}>
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
        </>
    );   
}