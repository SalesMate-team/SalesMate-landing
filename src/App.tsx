import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import PricingSection from './components/Pricing';
import CallToAction from './components/CallToAction';
import PricingPage from './pages/Pricing';
import WaitlistPage from './pages/Waitlist';

const Pricing = PricingPage;
const Waitlist = WaitlistPage;

function LandingPage() {
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
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/waitlist" element={<Waitlist />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
