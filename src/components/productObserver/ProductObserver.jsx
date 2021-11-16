import "./productObserver.scss"
import { NavLink } from "react-router-dom";

export default function ProductObserver() {
    return (
        <div className="productObserver">
            <div className="left">
                <div className="container">
                    <h1>
                        <span>Observer.</span>
                        Delivering an awesome
                        project management
                        solution for your business.
                    </h1>
                    <p>Each version of Observer is different and can cater many different business types. From small teams to large scale businesses Observer is here to help.</p>
                    <div className="wrapper">
                        <NavLink className="signUp" exact to="/sign-up"><div className="button" id="signUpButton">Sign up</div></NavLink>
                        <NavLink className="howItWorks" exact to="/how-it-works"><div className="button" id="howItWorksButton">How it works</div></NavLink>
                    </div>
                    <p id="lowerText">Already using Observer? <NavLink exact to="/sign-in">Sign in now.</NavLink></p>
                    <div className="partners">
                        <h2>Observer is currently used by some of our amazing partners.</h2>
                        <div className="partnerContainer">
                            <img src="assets/Dell.svg" alt="Dell logo" />
                            <img src="assets/Americanexpress.svg" alt="American Express logo" />
                            <img src="assets/Chase.svg" alt="Chase logo" />
                            <img src="assets/Citi.svg" alt="Citi logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="assets/ObserverIllustration.svg" alt="" />
            </div>
        </div>
    )
}
