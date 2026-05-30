import FAQCardContainer from "../FAQCardContainer/FAQCardContainer";

import { FAQ_CARDS } from "../../../../data/FAQCardData";

export default function FAQView() {
    return (
        <FAQCardContainer cards={FAQ_CARDS} />
    )
}