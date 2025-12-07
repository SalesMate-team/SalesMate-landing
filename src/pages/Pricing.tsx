import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <div className={styles.section}>
            <h1 className={styles.title}>Simple pricing for meaningful meetings.</h1>
            <p className={styles.subtitle}>Start for free. No credit card required.</p>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2 className={styles.planName}>Starter</h2>
                    <div className={styles.price}>$0</div>
                    <ul className={styles.features}>
                        <li>✓ 10 Meetings / month</li>
                        <li>✓ Basic Transcription</li>
                        <li>✓ Real-time Answers</li>
                    </ul>
                    <button className={styles.button}>Get Started</button>
                </div>

                <div className={`${styles.card} ${styles.highlight}`}>
                    <h2 className={styles.planName}>Pro</h2>
                    <div className={styles.price}>$29</div>
                    <ul className={styles.features}>
                        <li>✓ Unlimited Meetings</li>
                        <li>✓ Advanced Insights</li>
                        <li>✓ Automated Follow-ups</li>
                        <li>✓ Undetectable Mode</li>
                    </ul>
                    <button className={`${styles.button} ${styles.primary}`}>Start Trial</button>
                </div>

                <div className={styles.card}>
                    <h2 className={styles.planName}>Enterprise</h2>
                    <div className={styles.price}>Custom</div>
                    <ul className={styles.features}>
                        <li>✓ Custom Integrations</li>
                        <li>✓ Dedicated Success Manager</li>
                        <li>✓ SSO & Security</li>
                        <li>✓ Team Analytics</li>
                    </ul>
                    <button className={styles.button}>Contact Sales</button>
                </div>
            </div>
        </div>
    );
}
