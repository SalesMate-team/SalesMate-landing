import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.logo}>SalesMate.</div>
                    <p className={styles.copyright}>© 2024 SalesMate AI. All rights reserved.</p>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4>Product</h4>
                        <Link to="/waitlist">Waitlist</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/book-demo">Book a Demo</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Support</h4>
                        <Link to="/help-center">Help Center</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/security">Security</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <Link to="/legal/privacy-policy">Privacy Policy</Link>
                        <Link to="/legal/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
