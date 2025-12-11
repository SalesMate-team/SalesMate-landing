import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Imports for Pages
import PricingPage from './pages/Pricing';
import WaitlistPage from './pages/Waitlist';
import LegalPage from './pages/Legal';
import HelpCenterPage from './pages/HelpCenter';
import AuthCallbackPage from './pages/AuthCallback';
import BlogPage from './pages/Blog';
import BookDemoPage from './pages/BookDemo';
import CareersPage from './pages/Careers';
import ContactPage from './pages/Contact';
import EnterprisePage from './pages/Enterprise';
import ManifestoPage from './pages/Manifesto';
import PressPage from './pages/Press';
import GuidesPage from './pages/ResourcesGuides';
import ROIPage from './pages/ResourcesROICalculator';
import SecurityPage from './pages/Security';
import BugBountyPage from './pages/SecurityBugBounty';
import UseCasePage from './pages/UseCases';

// Reusing the Home content which was effectively LandingPage
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import PricingSection from './components/Pricing';
import CallToAction from './components/CallToAction';

function Home() {
    return (
        <main>
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <BenefitsSection />
            <HowItWorks />
            <SocialProof />
            <PricingSection />
            <CallToAction />
        </main>
    );
}

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/waitlist" element={<WaitlistPage />} />
                <Route path="/legal/:slug" element={<LegalPage />} />
                <Route path="/help-center" element={<HelpCenterPage />} />
                <Route path="/auth/callback" element={<AuthCallbackPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/book-demo" element={<BookDemoPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/manifesto" element={<ManifestoPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/resources/guides" element={<GuidesPage />} />
                <Route path="/resources/roi-calculator" element={<ROIPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/security/bug-bounty" element={<BugBountyPage />} />
                <Route path="/use-cases/:slug" element={<UseCasePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
