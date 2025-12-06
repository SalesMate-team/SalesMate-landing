import styles from './BenefitsSection.module.css';
import { Clock, TrendingUp, Rocket } from 'lucide-react';

export default function BenefitsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>SalesMate을 쓰면 이렇게 달라집니다</h2>
                </div>

                <div className={styles.grid}>

                    {/* Card 1: Time Savings */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Clock size={28} className="text-blue-400" />
                            <h3 className={styles.cardTitle}>시간을 90% 아낍니다</h3>
                        </div>

                        <div className={styles.timeComparison}>
                            <div className={styles.timeBlock}>
                                <span className={styles.blockLabel}>Before (3.5시간)</span>
                                <div className={`${styles.timeBar} ${styles.barBefore}`}></div>
                            </div>
                            <div className={styles.timeBlock}>
                                <span className={styles.blockLabel}>After (5분)</span>
                                <div className={`${styles.timeBar} ${styles.barAfter}`}></div>
                            </div>
                        </div>

                        <div className={styles.savingsBox}>
                            <span className={styles.savingsText}>💰 연 ₩8,160,000 가치 절약</span>
                            <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '4px' }}>
                                (시급 10만원, 주 5회 미팅 기준)
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Performance */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <TrendingUp size={28} className="text-green-400" />
                            <h3 className={styles.cardTitle}>성과가 눈에 띄게 좋아집니다</h3>
                        </div>

                        <div className={styles.statsList}>
                            <div className={styles.statRow}>
                                <span className={styles.statLabel}>미팅→계약 전환율</span>
                                <div className={styles.statValue}>
                                    <span className={styles.oldValue}>25%</span>
                                    <span className={styles.newValue}>43% <span className={styles.increase}>(+72%)</span></span>
                                </div>
                            </div>
                            <div className={styles.statRow}>
                                <span className={styles.statLabel}>2차 미팅 약속률</span>
                                <div className={styles.statValue}>
                                    <span className={styles.oldValue}>40%</span>
                                    <span className={styles.newValue}>68% <span className={styles.increase}>(+70%)</span></span>
                                </div>
                            </div>
                            <div className={styles.statRow}>
                                <span className={styles.statLabel}>미팅 중 당황 횟수</span>
                                <div className={styles.statValue}>
                                    <span className={styles.oldValue}>5회</span>
                                    <span className={styles.newValue}>0.5회 <span className={styles.increase}>(-90%)</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Growth */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Rocket size={28} className="text-purple-400" />
                            <h3 className={styles.cardTitle}>매 미팅마다 성장합니다</h3>
                        </div>

                        <div className={styles.graphContainer}>
                            {/* Simple dashed line for linear/stagnant growth */}
                            <svg width="100%" height="100%" viewBox="0 0 300 200" preserveAspectRatio="none">
                                {/* Without AI (Flat/Slow) */}
                                <path d="M0,180 L300,160" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                                <text x="210" y="150" fill="#64748b" fontSize="12">AI 도입 전</text>

                                {/* With AI (Exponential) */}
                                <path d="M0,180 C100,180 150,100 300,20" className={styles.curvePath} />
                                <text x="200" y="40" fill="#a78bfa" fontSize="12" fontWeight="bold">SalesMate 도입 후</text>
                            </svg>
                        </div>

                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <p style={{ fontStyle: 'italic', color: '#e2e8f0' }}>
                                "4주 전의 나와 지금의 나는<br />완전 다른 사람입니다."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
