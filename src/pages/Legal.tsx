import { useParams } from 'react-router-dom';

export default function LegalPage() {
    const { slug } = useParams<{ slug: string }>();

    const content: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
        'privacy-policy': {
            title: 'Privacy Policy',
            sections: [
                {
                    heading: "1. Scope and Applicability",
                    body: "This Privacy Policy applies to services provided by MinuteAi and our website. We are committed to protecting your personal data and ensuring transparency in how we handle your information."
                },
                {
                    heading: "2. Information We Collect",
                    body: "We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. We also automatically collect certain technical data when you use our services."
                },
                {
                    heading: "3. How We Use Information",
                    body: "We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with us about new features, updates, and offers."
                },
                {
                    heading: "4. Data Security",
                    body: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. Your data is encrypted at rest and in transit."
                }
            ]
        },
        'terms-of-service': {
            title: 'Terms of Service',
            sections: [
                {
                    heading: "1. Definitions",
                    body: "\"MinuteAi\", \"we\", \"us\" refers to the MinuteAi entity. \"Customer\" refers to the entity or person placing an order for our Services."
                },
                {
                    heading: "2. The Services",
                    body: "Subject to these Terms, MinuteAi grants you a non-exclusive, non-transferable right to access and use our AI meeting assistant services for your internal business purposes."
                },
                {
                    heading: "3. Customer Data",
                    body: "You retain all ownership rights to your Customer Data. You grant MinuteAi a limited license to access and use your data solely for the purpose of providing the Services to you."
                },
                {
                    heading: "4. Restrictions",
                    body: "You agree not to reverse engineer, decompile, or otherwise attempt to derive specific source code from the MinuteAi platform."
                }
            ]
        },
        'dpa': {
            title: 'Data Processing Agreement',
            sections: [
                {
                    heading: "1. Nature of Processing",
                    body: "MinuteAi processes Customer Personal Data to provide the AI meeting assistant services described in the Agreement."
                },
                {
                    heading: "2. Security Measures",
                    body: "MinuteAi maintains appropriate technical and organizational measures to protect the security, confidentiality, and integrity of Customer Data."
                }
            ]
        },
        'subprocessors': {
            title: 'Subprocessors',
            sections: [
                {
                    heading: "List of Subprocessors",
                    body: "MinuteAi uses certain third-party subprocessors to assist in providing our services. These include AWS (Hosting), OpenAI (AI Processing), and Stripe (Payments)."
                }
            ]
        }
    };

    const pageContent = slug ? content[slug] : null;

    if (!pageContent) {
        return (
            <div style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>404 - Page Not Found</h1>
                <p style={{ color: '#a1a1aa' }}>The legal document you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--foreground)' }}>
                {pageContent.title}
            </h1>
            <p style={{ color: '#a1a1aa', marginBottom: '3rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <div style={{ display: 'grid', gap: '2.5rem' }}>
                {pageContent.sections.map((section, i) => (
                    <div key={i}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>
                            {section.heading}
                        </h2>
                        <p style={{ lineHeight: 1.7, color: '#a1a1aa' }}>
                            {section.body}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
