
import Image from 'next/image';

// Styles sheet for the scss
import styles from './Footer.module.scss';

const mapsLink = 'https://www.google.com/maps/place/200+California+Ave,+Davis,+CA+95616/@38.541575,-121.7545256,17z/data=!3m1!4b1!4m6!3m5!1s0x80852908c3fdafab:0xa7e5de763b05e5a3!8m2!3d38.5415708!4d-121.7519507!16s%2Fg%2F11h9wcm75f?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D';

export default function Footer(){
    return (
        <div className={styles.footer}>

            <hr className={styles.divider} />

            <div className={styles.footerTop}>
                <div className={styles.footerNav}>
                    <div className={styles.navLinks}>

                        <section>
                            <h3 className={styles.navHeading}>Home</h3>
                            <div>
                                <a className={styles.link} href='#'>Schedule</a>
                            </div>
                    
                        </section>

                        <section>
                            <h3 className={styles.navHeading}>About</h3>
                            <div>
                                <a className={styles.link} href='#'>Mission</a>
                                <a className={styles.link} href='#'>Board</a>
                                <a className={styles.link} href='#'>FAQ</a> 
                            </div>
                        </section>

                        <section>
                            <h3 className={styles.navHeading}>Archive</h3>
                            <div>
                                <a className={styles.link} href='#'>Milestones</a>
                                <a className={styles.link} href='#'>Past Events</a>
                                <a className={styles.link} href='#'>Past Presentations</a>
                                <a className={styles.link} href='#'>Our Community</a>
                            </div>
                        </section>

                        <section>
                            <h3 className={styles.navHeading}>Opportunities</h3>
                            <div>
                                <a className={styles.link} href='#'>Graduate Programs</a>
                                <a className={styles.link} href='#'>Undergraduate Programs</a> 
                            </div>
                        </section>

                    </div>

                    <div className={styles.meetingInfo}>
                        <section>
                            <h3 className={styles.navHeading}>Meeting Location</h3>
                            <div>
                                <a className={styles.link} href='#'>Kerr Hall - Room 273</a>
                                <a className={styles.link} href='#'>200 California Ave, Davis, CA</a>
                                <a className={styles.link} href='#'>lingusticsclub@ucdavis.edu</a>
                            </div>


                        </section>
                        <a href={mapsLink} target='_blank' rel='google maps'>
                            <Image className={styles.map} src={'/images/footer/kerrHall.png'} alt={'Kerr Hall'} width={133} height={125} />
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
    )
}