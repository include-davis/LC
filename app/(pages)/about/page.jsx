
import MemberCard from "../../components/about/MemberCard/MemberCard";
import HeroSection from "../../components/about/HeroSection/HeroSection";
import Image from 'next/image';
import { LCboard } from '../../../data/teamMembers';

export default function AboutPage() {
    return (
        <>
            <div>
                {LCboard.map((member) => (
                    <MemberCard name={member.name} image={member.image} pronouns={member.pronouns} position={member.position}></MemberCard>
                ))}
                
            </div>
        </>
    )
}