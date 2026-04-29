import MemberCard from "../../components/about/MemberCard/MemberCard";
import Image from 'next/image';
import { LCboard } from '../../../data/teamMembers';
import ExpandedMemberCard from "../../components/about/ExpandedMemberCard/ExpandedMemberCard";

export default function About() {
    return (
        <div>
            {/* {LCboard.map((member) => (
                <MemberCard name={member.name} image={member.image} pronouns={member.pronouns} position={member.position}></MemberCard>
            ))} */}
            <ExpandedMemberCard></ExpandedMemberCard>
            
        </div>
    )
}