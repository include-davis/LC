import AboutContent from "../../components/about/AboutContent/AboutContent";

import { LCboard } from "../../../data/teamMembers";
import { FAQ_CARDS } from "../../../data/FAQCardData";

export const dynamic = "force-dynamic";

async function getBoardMembers() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/board_members?_published=true`,
            { next: { tags: ["cms"] } }
        );
        const data = await res.json();
        if (!data.ok || !data.body) {
            throw new Error(data.error);
        }
        if (data.body.length === 0) {
            return LCboard;
        }
        const parsedData = data.body.map((member) => {
            const photo = member.photo?.[0]?.src;
            return {
                id: member._id,
                name: member.first_name,
                lastName: member.last_name,
                pronouns: member.pronouns,
                position: member.position,
                positionShort: member.position,
                year: member.year,
                yearShort: member.year,
                major: member.major,
                majorShort: member.major,
                interests: member.interests,
                outside: member.outside_activities,
                funFact: member.fun_fact,
                instagram: member.instragram,
                linkedin: member.linkedin,
                image: photo,
                noBorderImage: photo,
                ExpandedMobileBackground: `/images/about/backgrounds/mobile/expanded/${member.first_name.toLowerCase()}ExpandedMobile.png`,
            };
        });
        return parsedData;
    } catch (e) {
        console.error(`Failed to fetch board_members: ${e.message}`);
        return LCboard;
    }
}

async function getFaqs() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/faq?_published=true`,
            { next: { tags: ["cms"] } }
        );
        const data = await res.json();
        if (!data.ok || !data.body) {
            throw new Error(data.error);
        }
        if (data.body.length === 0) {
            return FAQ_CARDS;
        }
        const parsedData = data.body.map((faq) => {
            return {
                id: faq._id,
                title: faq.question,
                description: faq.answer,
            };
        });
        return parsedData;
    } catch (e) {
        console.error(`Failed to fetch faq: ${e.message}`);
        return FAQ_CARDS;
    }
}

export default async function AboutPage() {
    const [boardMembers, faqs] = await Promise.all([getBoardMembers(), getFaqs()]);

    return <AboutContent boardMembers={boardMembers} faqs={faqs} />;
}
