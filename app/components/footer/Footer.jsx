
import Image from 'next/image';

// Styles sheet for the scss p
import styles from './Footer.module.scss';

const mapsLink = 'https://www.google.com/maps/place/200+California+Ave,+Davis,+CA+95616/@38.541575,-121.7545256,17z/data=!3m1!4b1!4m6!3m5!1s0x80852908c3fdafab:0xa7e5de763b05e5a3!8m2!3d38.5415708!4d-121.7519507!16s%2Fg%2F11h9wcm75f?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D';

export default function Footer(){
    return (
        <>
            <div className={styles.footer}>

                <hr className={styles.divider} />

                <div className={styles.footerTop}>
                    <div className={styles.footerNav}>
                        <div className={styles.navLinks}>

                            <div className={styles.mobileSocialIcons}>
                                <a className={styles.icon} href='#'><Image src={'/images/footer/discord.svg'} alt={'discord'} width={24} height={24}/></a>
                                <a className={styles.icon} href='#'><Image src={'/images/about/icons/instagramMobile.svg'} alt={'instagram'} width={34} height={34} /></a>
                            </div>

                            <section className={styles.navSection}>
                                <a className={styles.navHeading} href='/' >Home</a>
                                <div>
                                    <a className={styles.link} href='/#schedule'>Schedule</a>
                                </div>
                        
                            </section>

                            <section className={styles.navSection}>
                                <a className={styles.navHeading} href='/about' >About</a>
                                <div>
                                    <a className={styles.link} href='/about#mission'>Mission</a>
                                    <a className={styles.link} href='/about#board'>Board</a>
                                    <a className={styles.link} href='/about#faq'>FAQ</a> 
                                </div>
                            </section>

                            <section className={styles.navSection}>
                                <a className={styles.navHeading} href='/archive' >Archive</a>
                                <div>
                                    <a className={styles.link} href='/archive#events'>Milestones</a>
                                    <a className={styles.link} href='/archive#milestones'>Past Events</a>
                                    <a className={styles.link} href='/archive#presentations'>Past Presentations</a>
                                    <a className={styles.link} href='/archive#community'>Our Community</a>
                                </div>
                            </section>

                            <section className={styles.navSection}>
                                <a className={styles.navHeading} href='/opportunties' >Opportunities</a>
                                <div>
                                    <a className={styles.link} href='/opportunties#undergraduate'>Graduate Programs</a>
                                    <a className={styles.link} href='/opportunties#graduate'>Undergraduate Programs</a> 
                                </div>
                            </section>

                        </div>

                        <hr className={styles.mobileDivider} />

                        <div className={styles.meetingInfo}>
                            <section className={styles.meetingDetailsContainer}>
                                <h3 className={styles.meetingLocation} >Meeting Location</h3>
                                <div className={styles.meetingDetails}>
                                    <span>Kerr Hall - Room 273</span>
                                    <span>200 California Ave, Davis, CA</span>
                                    <span>lingusticsclub@ucdavis.edu</span>
                                </div>

                            </section>
                            <a href={mapsLink} target='_blank' rel='google maps'>
                                <div className={styles.mapWrapper}>
                                    <Image className={styles.map} src={'/images/footer/kerrHall.png'} alt={'Kerr Hall'} width={133} height={125} />
                                    <div className={styles.mapOverlay}>
                                        <div className={styles.overLayTXT} >
                                            <span>Open Map</span>
                                            <Image className={styles.mapIcon} src={'/images/footer/exLink.svg'} alt={'External Link'} width={18} height={18} />
                                        </div>
                                    </div>
                                </div>
                                
                            </a> 
                        </div>   
                    </div>

                </div>

                <hr className={styles.divider} />

                <div className={styles.footerBottom}>
                    <p className={styles.includeMsg} >Made with 💜 by #include at Davis</p>

                    <div className={styles.socialIcons}>
                        <a className={styles.icon} href='#'><Image src={'/images/footer/discord.svg'} alt={'discord'} width={18} height={18}/></a>
                        <a className={styles.icon} href='#'><Image src={'/images/footer/instagram.svg'} alt={'instagram'} width={22} height={22} /></a>
                    </div>
                </div>
            </div>

            <div className={styles.mobileFooter}>

            </div>
        </>
    )
}