import { Link } from 'react-router-dom';
import styles from './Careers.module.css';

export default function CareersPage() {
    return (
        <div className={styles.section}>
            <div className={styles.hero}>
                <h1 className={styles.title}>
                    You're running out of time to make generational wealth.
                </h1>
                <p className={styles.text}>
                    This is your best shot. Join MinuteAi and build the interaction layer of artificial intelligence.
                </p>
            </div>

            <div className={styles.jobList}>
                <h2 style={{ marginBottom: '1rem' }}>Open Positions</h2>

                <Link to="#" className={styles.job}>
                    <span className={styles.role}>Founding Engineer (Full Stack)</span>
                    <span className={styles.location}>San Francisco / Remote</span>
                </Link>
                <Link to="#" className={styles.job}>
                    <span className={styles.role}>AI Research Scientist</span>
                    <span className={styles.location}>San Francisco</span>
                </Link>
                <Link to="#" className={styles.job}>
                    <span className={styles.role}>Product Designer</span>
                    <span className={styles.location}>Remote</span>
                </Link>
            </div>
        </div>
    );
}
