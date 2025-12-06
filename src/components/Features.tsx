import styles from './Features.module.css';

const features = [
    {
        title: "Real-time Answers",
        description: "MinuteAi listens and learns so you don't have to. Get instant answers to complex questions, live during your meeting.",
        icon: "⚡"
    },
    {
        title: "Instant Follow-up",
        description: "Draft perfectly formatted emails seconds after the call ends. Send summaries, action items, and next steps with one click.",
        icon: "📨"
    },
    {
        title: "Person Insights",
        description: "Who are you really talking to? We pull deep insights about your attendees so you can build better relationships instantly.",
        icon: "🔍"
    },
    {
        title: "Beautiful Notes",
        description: "Forget simple transcripts. Get beautifully structured, shareable meeting notes that look like you spent hours writing them.",
        icon: "📝"
    }
];

export default function Features() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Supercharge your meetings.</h2>
                    <p className={styles.subtitle}>Four ways MinuteAi makes you the smartest person in the room.</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
