import styles from './Hero.module.css';
import { Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.badge}>
                    <Sparkles size={14} className={styles.badgeIcon} />
                    <span>New: AI 세일즈 코치 베타 출시</span>
                </div>

                <h1 className={styles.headline}>
                    세일즈 미팅, 이제 혼자서도<br />
                    완벽하게 준비하고 개선합니다
                </h1>

                <p className={styles.subhead}>
                    AI가 미팅 전에 완벽한 준비를 도와주고,
                    미팅 중에 실시간으로 서포트하고,
                    미팅 후에 구체적인 개선안을 알려줍니다.
                </p>

                <div className={styles.ctaGroup}>
                    <Link href="/waitlist" className={styles.primaryButton}>
                        🚀 내 세일즈 업그레이드하기 (대기자 등록)
                    </Link>

                    <div className={styles.socialProof}>
                        <span className={styles.fireIcon}>🔥</span>
                        <span>현재 127명의 Founder가 사용 준비 중</span>
                    </div>
                </div>

                <div className={styles.videoWrapper}>
                    <div className={styles.playButton}>
                        <Play fill="white" size={32} className={styles.playIcon} />
                    </div>
                    {/* Placeholder for video thumbnail - using a gradient/image overlay in production */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, rgba(76, 29, 149, 0.4), rgba(15, 23, 42, 0.6))',
                        zIndex: -1
                    }} />
                </div>
            </div>
        </section>
    );
}
