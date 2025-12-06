import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return [
        { slug: 'sales' },
        { slug: 'support' },
        { slug: 'consulting' },
        { slug: 'recruiting' },
    ];
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const content: Record<string, { title: string; description: string }> = {
        sales: {
            title: "Close more deals, faster.",
            description: "MinuteAi for Sales helps you capture every objection, action item, and next step so you can focus on the relationship, not the notes."
        },
        support: {
            title: "Resolve tickets in record time.",
            description: "Automate ticket creation and follow-up emails. MinuteAi listens to your support calls and categorizes feedback instantly."
        },
        consulting: {
            title: "Deliver value, not just hours.",
            description: "Capture every detail of client requirements. Auto-generate meeting summaries and project updates that impress your clients."
        },
        recruiting: {
            title: "Hire the best, faster.",
            description: "Focus on the candidate, not the interview notes. Compare candidates with AI-generated scorecards based on your criteria."
        }
    };

    const pageContent = content[slug];

    if (!pageContent) {
        return notFound();
    }

    return (
        <div style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                MinuteAi for <span style={{ textTransform: 'capitalize', color: 'var(--primary)' }}>{slug}</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#a1a1aa', lineHeight: 1.6 }}>
                {pageContent.description}
            </p>
        </div>
    );
}
