
import Image from 'next/image';

// Styles sheet for the scss
import styles from './Footer.module.scss';


export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.footer1}>
                <section>
                    <h3>Home</h3>
                    <a href='#'>Schedule</a>

                </section>

                <section>
                    <h3>About</h3>
                    <a href='#'>Mission</a>
                    <a href='#'>Board</a>
                    <a href='#'>FAQ</a>

                </section>

                <section>
                    <h3>Archive</h3>
                    <a href='#'>Milestones</a>
                    <a href='#'>Past Events</a>
                    <a href='#'>Past Presentations</a>
                    <a href='#'>Our Community</a>
                    
                </section>

                <section>
                    <h3>Opportunities</h3>
                    <a href='#'>Graduate Programs</a>
                    <a href='#'>Undergraduate Programs</a>
                </section>

                <div className={styles.location}>
                    <section>
                        <h3>Meeting Location</h3>
                        <a href='#'>Kerr Hall - Room 273</a>
                        <a href='#'>200 California Ave, Davis, CA</a>
                        <a href='#'>lingusticsclub@ucdavis.edu</a>

                    </section>

                </div>                
            </div>

            <div className={styles.footer2}>
                <p>Made with 💜 by #include at Davis</p>

                <div className={styles.icons}>
                    <a href='#'><Image alt={'discord'} width={18} height={18}/></a>
                    <a href='#'><Image alt={'instagram'} width={22} height={22} /></a>
                </div>
            </div>
        </div>
    )
}