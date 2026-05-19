import FAQCardContainer from "../../components/about/FAQCardContainer/FAQCardContainer";
import HeroSection from "../../components/about/HeroSection/HeroSection";

import { FAQ_CARDS } from "../../../data/FAQCardData";

export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <FAQCardContainer cards={FAQ_CARDS} />
        </>
    )
}