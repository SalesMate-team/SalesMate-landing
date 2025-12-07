import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    SalesMate<span style={{ color: 'var(--primary)' }}>.</span>
                </Link>

                <nav className={styles.nav}>
                    <Link to="/use-cases/sales" className={styles.navLink}>활용 사례</Link>
                    <Link to="/pricing" className={styles.navLink}>요금제</Link>
                    <Link to="/resources/guides" className={styles.navLink}>자료실</Link>
                </nav>

                <div className={styles.actions}>
                    <Link to="/waitlist" className={styles.primaryButton}>
                        대기자 등록
                    </Link>
                </div>
            </div>
        </header>
    );
}
