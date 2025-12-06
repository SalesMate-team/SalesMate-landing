import React from 'react';

export default function SecurityPage() {
    return (
        <div style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                Security First
            </h1>
            <p style={{ color: '#a1a1aa', lineHeight: 1.6, fontSize: '1.25rem', marginBottom: '3rem' }}>
                MinuteAi is built with enterprise-grade security from the ground up. We are SOC2 Type II compliant and ensure your data is always protected.
            </p>

            <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ padding: '2rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>SOC2 Type II Compliant</h3>
                    <p style={{ color: '#a1a1aa' }}>We undergo annual third-party audits to ensure our security controls meet the highest standards.</p>
                </div>
                <div style={{ padding: '2rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>End-to-End Encryption</h3>
                    <p style={{ color: '#a1a1aa' }}>All data is encrypted in transit (TLS 1.2+) and at rest (AES-256).</p>
                </div>
                <div style={{ padding: '2rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>GDPR & CCPA Ready</h3>
                    <p style={{ color: '#a1a1aa' }}>We provide tools to help you comply with global privacy regulations, including data deletion requests.</p>
                </div>
            </div>
        </div>
    );
}
