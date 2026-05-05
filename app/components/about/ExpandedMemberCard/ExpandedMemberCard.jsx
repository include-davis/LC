'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ExpandedMemberCard.module.scss';
import { LCboard } from '../../../../data/teamMembers'; // so we can access member data


export default function ExpandedMemberCard(){

    const [activeIndex, setActiveIndex] = useState(0);
    const current = LCboard[activeIndex];

    return (
        <div className={styles.container} style={{ backgroundImage: `url(/images/about/backgrounds/${current.name}_Background.svg)` }}>
            <Image className={styles.memberIMG} src={current.noBorderImage} alt={current.name} width={174} height={315} />

            <div className={styles.memberInfo}>
                <section className={styles.header}>
                    <h2>{current.name} {current.lastName} {current.pronouns}</h2>
                    <div className={styles.socials}>
                        <a href='#' rel='linkedin'><Image src={'/images/about/icons/linkedin.svg'} width={14} height={14}/></a>
                        <a href='#' rel='instagram'><Image src={'/images/about/icons/instagram.svg'} width={22} height={22}/></a>
                    </div>
                </section>
                
                <ul className={styles.standing}>
                    <li className={styles.position}>{current.position}</li>
                    <li>{current.year}</li>
                    <li>{current.major}</li>
                </ul>

                <ul className={styles.interests}>
                    {current.interests && 
                        <li><strong>Main Linguistic Interests:</strong> {current.interests}</li>
                    }
                    {current.outside &&
                        <li><strong>Outside of Linguistics:</strong> {current.outside}</li>
                    }
                    {current.funFact &&
                        <li><strong>Fun Fact:</strong> {current.funFact}</li>
                    }
                </ul>
            </div>

            <div className={styles.otherMembers}>
                {LCboard.map((member, i) => (
                    <button key={i} onClick={() => setActiveIndex(i)} className={`${styles.sideBtns} ${i === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${member.name} ${member.lastName}`}>
                    <Image src={member.noBorderImage} alt={member.name} className={styles.imgBtn} width={50} height={70}/>
                    </button>
                ))}
            </div>
        </div>
    );
}