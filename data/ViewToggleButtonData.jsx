import BIRD_ICON_WHITE_SVG from "../public/images/about/bird_white.svg";
import BIRD_ICON_GRAY_SVG from "../public/images/about/bird_gray.svg";

import QUESTION_ICON from "../public/images/about/question.svg";

import AboutLinguisticsView from "../app/components/about/AboutLinguisticsView/AboutLinguisticsView"
import FAQView from "../app/components/about/FAQView/FAQView";

export const VIEW_TOGGLE_BUTTONS = [
    {
        icon: BIRD_ICON_GRAY_SVG,
        iconSelected: BIRD_ICON_WHITE_SVG,
        iconAlt: "Bird Icon",
        text: "About Linguistics Club",
        selectedColor: '#6563DE',
        view: AboutLinguisticsView
    },
    {
        icon: QUESTION_ICON,
        iconSelected: QUESTION_ICON,
        iconAlt: "Question Icon",
        text: "FAQ (Frequently Asked Questions)",
        selectedColor: '#484f86',
        view: FAQView
    },
]