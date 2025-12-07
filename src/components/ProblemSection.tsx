import styles from './ProblemSection.module.css';
import { Moon, AlertCircle, Frown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>이런 경험, 있으시죠?</h2>
                </div>

                <motion.div
                    className={styles.problemGrid}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Night Before */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <Moon size={24} className="text-blue-400" />
                            미팅 전날 밤 😰
                        </div>
                        <div className={styles.quote}>
                            "내일 미팅에서 뭘 말하지?"<br />
                            Notion 뒤지고, 구글 드라이브 찾고...<br />
                            결국 대충 정리하고 자야 함
                        </div>
                        <div className={styles.metrics}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>준비 시간</span>
                                <span className={styles.metricValue}>2시간</span>
                            </div>
                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>자신감</span>
                                <span className={styles.metricValue}>60%</span>
                            </div>
                        </div>
                    </div>

                    {/* During Meeting */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <AlertCircle size={24} className="text-orange-400" />
                            미팅 중 😱
                        </div>
                        <div className={styles.quote}>
                            "우리 경쟁사와 차이가 뭔가요?"<br />
                            아, 이거 정리해뒀는데...<br />
                            어디 있더라... 어버버...
                        </div>
                        <div className={styles.metrics}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>당황한 횟수</span>
                                <span className={styles.metricValue}>평균 3-5회</span>
                            </div>
                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>답변 못함</span>
                                <span className={styles.metricValue}>2-3번</span>
                            </div>
                        </div>
                    </div>

                    {/* After Meeting */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <Frown size={24} className="text-gray-400" />
                            미팅 후 😔
                        </div>
                        <div className={styles.quote}>
                            "아, 그때 저렇게 말할걸..."<br />
                            "다음엔 뭘 개선하지?"<br />
                            근데... 뭐가 문제였더라?
                        </div>
                        <div className={styles.metrics}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>기록</span>
                                <span className={styles.metricValue}>두루뭉술</span>
                            </div>
                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>다음 미팅</span>
                                <span className={styles.metricValue}>실수 반복</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className={styles.highlightBox}>
                    <span className={styles.highlightTitle}>💡 핵심 문제</span>
                    <p className={styles.highlightText}>
                        "세일즈를 잘하고 싶은데, 혼자서 개선하기엔 너무 어렵다"
                    </p>
                </div>
            </div>
        </section >
    );
}
