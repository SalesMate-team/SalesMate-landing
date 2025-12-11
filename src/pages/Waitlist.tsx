import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import styles from './Waitlist.module.css';

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await addDoc(collection(db, 'waitlist'), {
                email,
                createdAt: serverTimestamp(),
                source: 'landing_page'
            });
            setSubmitted(true);
        } catch (err) {
            console.error("Error adding document: ", err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={styles.main}>
            <Link to="/" className={styles.backLink}>
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
                                disabled={loading}
                            />
                            <button type="submit" className={styles.button} disabled={loading}>
                                {loading ? '등록 중...' : '대기자 등록하기'}
                            </button>
                            {error && <p style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.875rem' }}>{error}</p>}
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
                        <Link to="/" className={styles.homeButton}>
                            홈으로 돌아가기
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}
