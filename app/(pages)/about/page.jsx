
import MemberCard from "../../components/about/MemberCard/MemberCard";
import HeroSection from "../../components/about/HeroSection/HeroSection";
import Image from 'next/image';
import { LCboard } from '../../../data/teamMembers';

import styles from './page.module.scss';

export default function AboutPage() {
    return (
        <>
            <div className={styles.meetTheBoard} >
                <h2>Meet the Board!</h2>
                <div className={styles.memberCards} >
                    {LCboard.map((member) => (
                        <MemberCard key={member.id} name={member.name} image={member.image} pronouns={member.pronouns} position={member.position}></MemberCard>
                    ))}
                </div>
            </div>

        </>
    )
}