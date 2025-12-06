import styles from './SocialProof.module.css';
import { Star } from 'lucide-react';

export default function SocialProof() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Founder들이 먼저 경험하고 있습니다</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <p className={styles.quote}>
                            "첫 미팅에서 바로 효과를 봤어요.
                            고객이 '정말 준비 많이 하셨네요'
                            라고 칭찬했습니다."
                        </p>
                        <div className={styles.author}>
                            <img src="/avatar_jieun.png" alt="박지은" className={styles.avatar} />
                            <div>
                                <span className={styles.name}>박지은</span>
                                <span className={styles.role}>Pre-Series A / SaaS Founder</span>
                                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.quote}>
                            "매번 즉흥으로 하던 세일즈가
                            이제 체계가 생겼어요.
                            미팅이 두렵지 않습니다."
                        </p>
                        <div className={styles.author}>
                            <img src="/avatar_taehyun.png" alt="김태현" className={styles.avatar} />
                            <div>
                                <span className={styles.name}>김태현</span>
                                <span className={styles.role}>Seed Stage / B2B 플랫폼 Founder</span>
                                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.quote}>
                            "내가 뭘 못하는지 몰랐는데,
                            AI가 콕콕 짚어줘서 놀랐어요.
                            2주 만에 확실히 달라졌습니다."
                        </p>
                        <div className={styles.author}>
                            <img src="/avatar_sujin.png" alt="이수진" className={styles.avatar} />
                            <div>
                                <span className={styles.name}>이수진</span>
                                <span className={styles.role}>Solo Founder / HR Tech</span>
                                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>4.8/5.0</span>
                        <span className={styles.statLabel}>평균 만족도</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>2시간 → 5분</span>
                        <span className={styles.statLabel}>미팅 준비 시간</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>+58%</span>
                        <span className={styles.statLabel}>전환율 향상</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>10회</span>
                        <span className={styles.statLabel}>개선 실감가지</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
