import styles from './SolutionSection.module.css';
import { Check, Brain, MessageSquare, LineChart, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>SalesMate이 당신의 세일즈를 완벽하게 만듭니다</h2>
                    <p className={styles.subtitle}>미팅의 전/중/후, 모든 순간에 AI가 함께합니다</p>
                </div>

                {/* Step 1: Pre-meeting */}
                <motion.div
                    className={styles.stepBlock}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.stepContent}>
                        <span className={styles.stepLabel}>1️⃣ 미팅 전: 완벽한 준비</span>
                        <h3 className={styles.stepTitle}>준비 시간 2시간 → 15분으로 단축</h3>

                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <Check className={styles.checkIcon} size={20} />
                                <div className={styles.featureText}>
                                    <h4>맞춤형 프레젠테이션 스크립트</h4>
                                    <p>"이 고객에겐 이 순서로 설명하세요" - AI가 전략을 짜줍니다.</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <Check className={styles.checkIcon} size={20} />
                                <div className={styles.featureText}>
                                    <h4>예상 질문 20개 + 완벽한 답변</h4>
                                    <p>과거 비슷한 미팅 분석을 기반으로 철저하게 대비합니다.</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <Check className={styles.checkIcon} size={20} />
                                <div className={styles.featureText}>
                                    <h4>고객사 리서치 자동화</h4>
                                    <p>웹사이트, 뉴스, LinkedIn을 자동 분석해 요약해줍니다.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.comparisonBox}>
                            <div className={styles.comparisonRow}>
                                <span>⏰ 준비 시간</span>
                                <span className={styles.beforeVal}>2시간</span>
                                <span className={styles.afterVal}>15분</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>😰 자신감</span>
                                <span className={styles.beforeVal}>60점</span>
                                <span className={styles.afterVal}>95점</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mockupContainer}>
                        {/* Visualizing the "Cheat Sheet" concept */}
                        <div className={styles.aiInterface}>
                            <div className={styles.interfaceHeader}>
                                <span>🤖 AI 치트시트 생성 완료</span>
                                <span style={{ color: '#4ade80' }}>준비됨</span>
                            </div>
                            <div className={styles.suggestionBox}>
                                <span className={styles.suggestionTitle}>📌 추천 전략</span>
                                <p>"ROI"와 "도입 속도"에 집중하세요. 이 고객사는 최근 팀을 확장했습니다...</p>
                            </div>
                            <div className={styles.suggestionBox} style={{ borderColor: '#fbbf24', background: 'rgba(251, 191, 36, 0.1)' }}>
                                <span className={styles.suggestionTitle} style={{ color: '#fbbf24' }}>⚠️ 예상 반론</span>
                                <p>"경쟁사 X보다 왜 비싼가요?"</p>
                                <div style={{ marginTop: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                                    <strong>대응 포인트:</strong> 24/7 전담 지원 서비스를 강조하세요...
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Step 2: During Meeting */}
                <motion.div
                    className={`${styles.stepBlock} ${styles.reverse}`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.stepContent}>
                        <span className={styles.stepLabel}>2️⃣ 미팅 중: 실시간 AI 서포트</span>
                        <h3 className={styles.stepTitle}>베테랑 코치가 옆에 있는 것처럼</h3>

                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <Check className={styles.checkIcon} size={20} />
                                <div className={styles.featureText}>
                                    <h4>실시간 답변 추천</h4>
                                    <p>고객 질문에 3초 안에 최적의 답변을 제시합니다.</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <Check className={styles.checkIcon} size={20} />
                                <div className={styles.featureText}>
                                    <h4>텔레프롬프터 기능</h4>
                                    <p>다음에 할 말과 놓치면 안 되는 포인트를 화면에 띄워줍니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mockupContainer}>
                        <div className={styles.aiInterface}>
                            <div className={styles.interfaceHeader}>
                                <span className={styles.stageLabel}>🎯 현재 단계: 제품 소개 (3/7)</span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '5px' }}>❓ 고객 질문 감지</div>
                                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                                    "경쟁사 A와 비교했을 때 어떤 점이 다른가요?"
                                </div>
                            </div>

                            <div className={styles.suggestionBox}>
                                <span className={styles.suggestionTitle}>🤖 AI 추천 답변</span>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ padding: '8px', background: 'rgba(124, 58, 237, 0.2)', borderRadius: '6px', cursor: 'pointer' }}>
                                        1️⃣ "가장 큰 차이점은 X입니다..." (성공률 70%)
                                    </div>
                                    <div style={{ padding: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '6px' }}>
                                        2️⃣ "유사한 고객 사례를 보여드리겠습니다..."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Step 3: Post Meeting */}
                <motion.div
                    className={styles.stepBlock}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.stepContent}>
                        <span className={styles.stepLabel}>3️⃣ 미팅 후: 구체적인 개선안</span>
                        <h3 className={styles.stepTitle}>매 미팅마다 성장하는 나</h3>

                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <Check className={styles.checkIcon} size={20} />
                                <div className={styles.featureText}>
                                    <h4>자동 리포트 & CRM 업데이트</h4>
                                    <p>대화 녹음, 전사, 요약부터 CRM 입력까지 자동화됩니다.</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <Check className={styles.checkIcon} size={20} />
                                <div className={styles.featureText}>
                                    <h4>정밀 분석 피드백</h4>
                                    <p>"음..." 버릇, 말 자르기 등 구체적인 개선 포인트를 짚어줍니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mockupContainer}>
                        <div className={styles.reportCard}>
                            <div className={styles.reportHeader}>
                                <span>📊 미팅 분석 리포트</span>
                                <div className={styles.scoreCircle}>78</div>
                            </div>

                            <div className={styles.reportSection}>
                                <strong style={{ color: '#4ade80', fontSize: '0.9rem' }}>✅ 다음 할 일 (Next Actions)</strong>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                                    <li>□ ROI 계산기 발송</li>
                                    <li>□ 기술 팀 미팅 일정 잡기</li>
                                </ul>
                            </div>

                            <div className={styles.reportSection}>
                                <strong style={{ color: '#f472b6', fontSize: '0.9rem' }}>📈 개선 제안</strong>
                                <div style={{ marginTop: '8px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                                    • 가격 질문에서 머뭇거림 (3초)<br />
                                    <span style={{ color: '#64748b', fontSize: '0.85rem' }}>→ 다음엔 준비된 스크립트 #4를 활용하세요</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
