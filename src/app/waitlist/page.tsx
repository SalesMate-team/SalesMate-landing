'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export default function WaitlistPage() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send to backend API
        setTimeout(() => setSubmitted(true), 500);
    };

    return (
        <main className={styles.main}>
            <Link href="/" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <div className={styles.container}>
                {!submitted ? (
                    <>
                        <h1 className={styles.title}>SalesMate 대기자 명단 등록</h1>
                        <p className={styles.subtitle}>
                            AI 세일즈 코칭의 미래를 가장 먼저 경험하세요.
                            <br />현재 매주 20명의 파운더에게 초대장을 보내드리고 있습니다 (알파 테스트).
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="email"
                                placeholder="업무용 이메일을 입력하세요"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className={styles.button}>
                                대기자 등록하기
                            </button>
                        </form>

                        <div className={styles.badges}>
                            <span>🔒 데이터 보안 철저</span>
                            <span>✨ 얼리 액세스 혜택 제공</span>
                        </div>
                    </>
                ) : (
                    <div className={styles.success}>
                        <CheckCircle2 size={48} className={styles.successIcon} />
                        <h2 className={styles.successTitle}>등록되었습니다!</h2>
                        <p className={styles.successDesc}>
                            <strong>{email}</strong>(으)로 확인 메일을 발송했습니다.
                            <br />자리가 나는 대로 가장 먼저 알려드리겠습니다.
                        </p>
                        <Link href="/" className={styles.homeButton}>
                            홈으로 돌아가기
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}
