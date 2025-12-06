import Link from 'next/link';
import styles from './page.module.css';

export default function BlogPage() {
    return (
        <div className={styles.section}>
            <header className={styles.header}>
                <h1 className={styles.title}>Blog</h1>
                <p style={{ color: '#a1a1aa' }}>Latest news and insights from the MinuteAi team.</p>
            </header>

            <div className={styles.blogList}>
                <Link href="#" className={styles.post}>
                    <span className={styles.date}>October 13, 2025</span>
                    <h2 className={styles.postTitle}>Why Meeting Bots Feel Like Surveillance</h2>
                    <p className={styles.excerpt}>
                        And how we designed MinuteAi to be undetectable and helpful, rather than a silent observer in the room.
                    </p>
                </Link>

                <Link href="#" className={styles.post}>
                    <span className={styles.date}>September 18, 2025</span>
                    <h2 className={styles.postTitle}>MinuteAi Thesis on Virality and Hype</h2>
                    <p className={styles.excerpt}>
                        Building a product that people actually want to talk about, instead of forcing growth through ads.
                    </p>
                </Link>

                <Link href="#" className={styles.post}>
                    <span className={styles.date}>September 13, 2025</span>
                    <h2 className={styles.postTitle}>Launching People Search & Memory</h2>
                    <p className={styles.excerpt}>
                        Introducing deep context for your meetings. Know who you are talking to before you even say hello.
                    </p>
                </Link>
            </div>
        </div>
    );
}
