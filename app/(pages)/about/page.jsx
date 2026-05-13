
// importing footer function
import Footer from "../../components/footer/Footer"

import MemberCard from "../../components/about/MemberCard/MemberCard";
import Image from 'next/image';
import { LCboard } from '../../../data/teamMembers';

export default function About() {
    return (
        <div>
            {/* {LCboard.map((member) => (
                <MemberCard name={member.name} image={member.image} pronouns={member.pronouns} position={member.position}></MemberCard>
            ))} */}
            
            <Footer></Footer>

        </div>
        
    )
}