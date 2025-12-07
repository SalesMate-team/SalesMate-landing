'use client';
import { Link } from 'react-router-dom';
import styles from './Pricing.module.css';
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>내 상황에 맞는 플랜을 선택하세요</h2>

                <div className={styles.grid}>

                    {/* Card 1: Starter / Waitlist */}
                    <div className={styles.card}>
                        <h3 className={styles.planName}>Starter</h3>
                        <div className={styles.price}>
                            무료 <span className={styles.period}>/ 대기자</span>
                        </div>
                        <p className={styles.desc}>아직 출시 전입니다. 웨이트리스트에 등록하세요.</p>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 기본 AI 코칭 (월 3회)</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 기본 전사 기능</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 커뮤니티 접근</li>
                        </ul>

                        <Link to="/waitlist" className={styles.buttonOutline}>
                            웨이트리스트 등록
                        </Link>
                    </div>

                    {/* Card 2: Pro / Pre-order */}
                    <div className={`${styles.card} ${styles.popularCard}`}>
                        <div className={styles.popularBadge}>BEST VALUE</div>
                        <h3 className={styles.planName}>Pro</h3>
                        <div className={styles.price}>
                            ₩19,000 <span className={styles.period}>/ 월</span>
                        </div>
                        <div className={styles.originalPrice}>정가 ₩39,000 (얼리버드 50% 할인)</div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> <strong>무제한</strong> AI 코칭</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 실시간 텔레프롬프터</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 심층 분석 리포트</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> Notion, CRM 연동</li>
                        </ul>

                        <Link to="/waitlist" className={styles.buttonPrimary}>
                            얼리버드 예약하기
                        </Link>
                        <p className={styles.subtext}>결제는 서비스 출시 시점에 진행됩니다.</p>
                    </div>

                    {/* Card 3: Team */}
                    <div className={styles.card}>
                        <h3 className={styles.planName}>Team</h3>
                        <div className={styles.price}>
                            별도 문의 <span className={styles.period}></span>
                        </div>
                        <p className={styles.desc}>5인 이상 세일즈 팀을 위한 맞춤 플랜</p>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> Admin 대시보드</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 팀별 성과 분석</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 전용 고객 지원 매니저</li>
                            <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} /> 사내 시스템 연동 (API)</li>
                        </ul>

                        <Link to="/waitlist" className={styles.buttonOutline}>
                            도입 문의하기
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
