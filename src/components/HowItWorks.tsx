import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>시작은 5분이면 충분합니다</h2>

                <div className={styles.steps}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepHeader}>
                            <span className={styles.stepNumber}>1단계</span>
                            <span className={styles.stepTime}>2분</span>
                        </div>
                        <h3 className={styles.stepTitle}>회사 정보 연결</h3>
                        <p className={styles.stepDesc}>Notion, Google Drive, 기존 자료를 연결하여 AI에게 문맥을 학습시킵니다.</p>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepHeader}>
                            <span className={styles.stepNumber}>2단계</span>
                            <span className={styles.stepTime}>1분</span>
                        </div>
                        <h3 className={styles.stepTitle}>미팅 일정 등록</h3>
                        <p className={styles.stepDesc}>Calendar 연동으로 고객 정보를 자동으로 가져오고 준비합니다.</p>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepHeader}>
                            <span className={styles.stepNumber}>3단계</span>
                            <span className={styles.stepTime}>2초</span>
                        </div>
                        <h3 className={styles.stepTitle}>미팅 시작</h3>
                        <p className={styles.stepDesc}>Chrome Extension 버튼 하나만 누르면 AI 코치가 실시간 회의에 참여합니다.</p>
                    </div>
                </div>

                <div className={styles.integrations}>
                    <div className={styles.integrationLogos}>
                        {/* Using text placeholders instead of actual logos for simplicity in this artifact, 
                in a real app these would be SVGs/Images */}
                        <span className={styles.logoPlaceholder}>📝 Notion</span>
                        <span className={styles.logoPlaceholder}>📁 Google Drive</span>
                        <span className={styles.logoPlaceholder}>📅 Calendar</span>
                        <span className={styles.logoPlaceholder}>💼 Salesforce</span>
                        <span className={styles.logoPlaceholder}>🎥 Zoom</span>
                        <span className={styles.logoPlaceholder}>📹 Meet</span>
                        <span className={styles.logoPlaceholder}>📊 HubSpot</span>
                        <span className={styles.logoPlaceholder}>💬 Slack</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
