import Finance from "./components/finance/Finance"
import HowHero from "./components/howHero/HowHero"
import ProjectManagement from "./components/projectManagement/ProjectManagement"
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import "./howItWorks.scss"

export default function HowItWorks() {
    return (
        <div className="howItWorks">
            <div className="circleMedium" />
            <div className="circleSmall" />
            <div className="bgSquare" />
            <div className="bgSquareSmall" />
            <div className="bgSquareLarge" />
            <div className="bgSquareBorder" />
            <div className="bgLine1"/>
            <div className="bgLine2"/>
            <img className="guy" src="assets/guyFalling2.svg" alt="" />
            <HowHero />
            <ProjectManagement />
            <Finance />
            <Newsletter />
            <Footer />
        </div>
    )
}
