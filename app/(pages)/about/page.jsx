import FAQCardContainer from "../../components/about/FAQCardContainer/FAQCardContainer";

import { FAQ_CARDS } from "../../../data/FAQCardData";

export default function AboutPage() {
    return (
        <>
            <FAQCardContainer cards={FAQ_CARDS} />
        </>
    )
}