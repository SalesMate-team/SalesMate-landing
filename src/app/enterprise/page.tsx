import styles from './page.module.css';

export default function EnterprisePage() {
    return (
        <div className={styles.section}>
            <div className={styles.hero}>
                <h1 className={styles.title}>
                    Imagine everyone knew as much about your company as you.
                </h1>
                <p className={styles.subtitle}>
                    MinuteAi is the enterprise meeting AI for Sales, Customer Support, and Recruiting teams.
                    We help you capture every insight, automate every follow-up, and secure every conversation.
                </p>
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Sales</h3>
                    <p className={styles.cardText}>
                        Never miss a follow-up. Automatically sync meeting notes to Salesforce/HubSpot, handle objections in real-time, and close deals faster.
                    </p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Recruiting</h3>
                    <p className={styles.cardText}>
                        Focus on the candidate, not the notes. Create standardized interview scorecards automatically and detect bias in real-time.
                    </p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Support</h3>
                    <p className={styles.cardText}>
                        Resolve tickets faster. Instant knowledge retrieval from past conversations, auto-generated Jira tickets, and perfect handoffs.
                    </p>
                </div>
            </div>

            <div className={styles.trust} style={{ marginTop: '5rem', textAlign: 'center' }}>
                <h2 className={styles.trustTitle} style={{ fontSize: '2rem', marginBottom: '2rem' }}>Trusted by Forward-Thinking Enterprises</h2>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', color: '#666', fontSize: '1.25rem', fontWeight: 600 }}>
                    <span>SOC2 Type II Compliant</span>
                    <span>•</span>
                    <span>GDPR Ready</span>
                    <span>•</span>
                    <span>AES-256 Encryption</span>
                    <span>•</span>
                    <span>SSO & SAML</span>
                </div>
            </div>
        </div>
    );
}
