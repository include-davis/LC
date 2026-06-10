import { useState } from 'react';
import Image from 'next/image';
import styles from './MemberCardMobile.module.scss';

export default function MemberCardMobile({ id, name, lastName, image, pronouns, positionShort, year, major, interests, outside, funFact, expandedBackground }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={styles.cardContainer} key={id} style={{backgroundImage: isExpanded ? `url(${expandedBackground})` : `url(/images/about/backgrounds/mobile/${name}Mobile.png)` }}>

            <div className={styles.cardContent} >
                <div className={styles.topHalf}>
                    <div className={styles.memberStarImg}>
                        <Image className={styles.memberIMG} src={image} alt={name} width={62} height={62} />
                        <Image className={styles.diamondSVG} src={'images/about/diamond.svg'} width={36} height={43} />
                    </div>
                    <div>
                        <section className={styles.memberInfo}>
                            <h3>{name} {lastName} {pronouns}</h3>

                            <ul className={styles.standing}>
                                <li className={styles.position}>{positionShort}</li>
                                {year && <li className={styles.standingLi}>{year}</li>}
                                <li className={styles.standingLi}>{major}</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className={styles.arrowExpandBtn} onClick={() => setIsExpanded(!isExpanded)}>
                        <Image className={`${styles.arrow} ${isExpanded ? styles.rotatedArrow : ''}`} src={'images/about/icons/downArrow.svg'} alt={'arrow'} width={20} height={9} />
                </div>

                <div className={isExpanded ? styles.showing : styles.hidden}>
                    <div className={styles.memberDetails}>
                        {interests &&
                            <li><strong>Main Linguistic Interests:</strong> {interests}</li>
                        }
                        {outside &&
                            <li><strong>Outside of Linguistics:</strong> {outside}</li>
                        }
                        {funFact &&
                            <li><strong>Fun Fact:</strong> {funFact}</li>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}