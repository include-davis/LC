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
            <button className={styles.closeBtn}><Image src='/images/about/icons/x.png' alt='x icon' width={25} height={25} /></button>
            
            <div className={styles.card}>
                <Image className={styles.memberIMG} src={current.noBorderImage} alt={current.name} width={174} height={315} />

                <div className={styles.memberInfo}>
                    <section className={styles.header}>
                        <h2 className={styles.headerTitle} >{current.name} {current.lastName} {current.pronouns}</h2>
                        <div className={styles.socials}>
                            <a className={styles.socialLink} href='#' rel='linkedin'><Image src={'/images/about/icons/linkedin.svg'} width={14} height={14}/></a>
                            <a className={styles.socialLink} href='#' rel='instagram'><Image src={'/images/about/icons/instagram.svg'} width={22} height={22}/></a>
                        </div>
                    </section>

                    <ul className={styles.standing}>
                        <li className={styles.position}>{current.position}</li>
                        <li className={styles.standingLi}>{current.year}</li>
                        <li className={styles.standingLi}>{current.major}</li>
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
                    {/* {LCboard.map((member, i) => (
                        <button key={i} onClick={() => setActiveIndex(i)} className={`${styles.sideBtns} ${i === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${member.name} ${member.lastName}`}>
                        <Image src={member.noBorderImage} alt={member.name} className={styles.imgBtn} width={50} height={70}/>
                        </button>
                    ))} */}

                    {/* Hard coding method */}
                    <button onClick={() => setActiveIndex(0)} className={`${styles.sideBtns} ${0 === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${LCboard[0].name} ${LCboard[0].lastName}`} >
                        <Image src={LCboard[0].noBorderImage} alt={LCboard[0].name} className={styles.imgBtn} width={50} height={70}/>
                    </button>

                    <button onClick={() => setActiveIndex(1)} className={`${styles.sideBtns} ${1 === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${LCboard[1].name} ${LCboard[1].lastName}`} >
                        <Image src={LCboard[1].noBorderImage} alt={LCboard[1].name} className={styles.imgBtn} width={50} height={70}/>
                    </button>

                    <button onClick={() => setActiveIndex(2)} className={`${styles.sideBtns} ${2 === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${LCboard[2].name} ${LCboard[2].lastName}`} >
                        <Image src={LCboard[2].noBorderImage} alt={LCboard[2].name} className={styles.imgBtn} width={50} height={70}/>
                    </button>

                    <button onClick={() => setActiveIndex(3)} className={`${styles.sideBtns} ${3 === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${LCboard[3].name} ${LCboard[3].lastName}`} >
                        <Image src={LCboard[3].noBorderImage} alt={LCboard[3].name} className={styles.imgBtn} width={50} height={70}/>
                    </button>

                    <button onClick={() => setActiveIndex(4)} className={`${styles.sideBtns} ${4 === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${LCboard[4].name} ${LCboard[4].lastName}`} >
                        <Image src={LCboard[4].noBorderImage} alt={LCboard[4].name} className={styles.imgBtn} width={50} height={70}/>
                    </button>

                    <button onClick={() => setActiveIndex(5)} className={`${styles.sideBtns} ${5 === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${LCboard[5].name} ${LCboard[5].lastName}`} >
                        <Image src={LCboard[5].noBorderImage} alt={LCboard[5].name} className={styles.imgBtn} width={50} height={70}/>
                    </button>

                    <button onClick={() => setActiveIndex(6)} className={`${styles.sideBtns} ${6 === activeIndex ? styles.active : styles.dim}`} aria-label={`View ${LCboard[6].name} ${LCboard[6].lastName}`} >
                        <Image src={LCboard[6].noBorderImage} alt={LCboard[6].name} className={styles.imgBtn} width={50} height={70}/>
                    </button>

                </div>
            </div>

        </div>
    );
}