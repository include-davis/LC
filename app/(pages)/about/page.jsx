'use client';

import { useState } from 'react';
import MemberCard from "../../components/about/MemberCard/MemberCard";
import HeroSection from "../../components/about/HeroSection/HeroSection";
import { LCboard } from '../../../data/teamMembers';
import ExpandedMemberCard from "../../components/about/ExpandedMemberCard/ExpandedMemberCard";
import styles from './page.module.scss';

export default function AboutPage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

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
        </>
    );
}