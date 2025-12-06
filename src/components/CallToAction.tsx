'use client';
import Link from 'next/link';
import styles from './CallToAction.module.css';
import { CheckCircle2 } from 'lucide-react';

export default function CallToAction() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>다음 미팅부터 달라지세요</h2>
                <p className={styles.subheadline}>
                    5분 설정, 바로 사용 가능 • 14일 무료 • 카드 등록 불필요
                </p>

                <div className={styles.ctaWrapper}>
                    <Link href="/waitlist" className={styles.submitButton}>
                        🚀 지금 시작하기 (Waitlist Join)
                    </Link>
                    <p className={styles.subtext}>
                        5분이면 충분합니다. 카드 등록 없이 무료로 시작하세요.
                    </p>
                </div>

                <p style={{ color: '#94a3b8', marginBottom: '20px', fontSize: '0.9rem' }}>
                    현재 147명이 사용 준비 중
                </p>

                <div className={styles.trustBadges}>
                    <div className={styles.trustItem}>
                        <CheckCircle2 size={16} /> 카드 등록 불필요
                    </div>
                    <div className={styles.trustItem}>
                        <CheckCircle2 size={16} /> 언제든 취소 가능
                    </div>
                    <div className={styles.trustItem}>
                        <CheckCircle2 size={16} /> 데이터 완전 삭제 보장
                    </div>
                </div>
            </div>
        </section>
    );
}
