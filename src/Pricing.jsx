import Footer from "./components/footer/Footer";
import PricingHero from "./components/pricing/PricingHero";
import Newsletter from './components/newsletter/Newsletter';
import "./pricing.scss";

export default function Pricing() {
    return (
        <div className="pricing">
            <PricingHero />
            <Newsletter />
            <Footer />
        </div>
    )
}
