import "./pricingHero.scss";
import { NavLink } from "react-router-dom";

export default function PricingHero() {
    return (
        <div className="pricingHero">
            <div className="container">
                <h1>Grow your business with Observer.</h1>
                <div className="colContainer">
                    <div className="col">
                        <h1>Free</h1>
                        <p>The free version of Observer perfect for small teams.</p>
                        <h2><span id="bold">£0.<span id="lower">00</span></span> /Month</h2>
                        <ul>
                            <li>Start a project with a team of upto 10 members.</li>
                            <li>Run up to 3 projects simultaneously. </li>
                            <li>Full text and voice message system.</li>
                        </ul>
                        <NavLink className="signUp" exact to="/sign-up"><div className="button" id="signUpButton">Try today</div></NavLink>
                    </div>
                    <div className="col">
                        <h1>Pro</h1>
                        <p>All the benefits of the free version but with more features and support.</p>
                        <h2><span id="bold">£20.<span id="lower">49</span></span> /Month</h2>
                        <ul>
                            <li>Start a project with a team of upto 100 members.</li>
                            <li>Run up to 20 projects simultaneously. </li>
                            <li>Full text and voice message system.</li>
                            <li>24/7 support and customer care.</li>
                        </ul>
                        <NavLink className="signUp" exact to="/sign-up"><div className="button" id="signUpButton">Try today</div></NavLink>
                    </div>
                    <div className="col">
                        <h1>Business</h1>
                        <p>The free version of Observer perfect for small teams.</p>
                        <h2><span id="bold">£80.<span id="lower">99</span></span> /Month</h2>
                        <ul>
                            <li>Unlimited team members.</li>
                            <li>Unlimited projects.</li>
                            <li>Full text and voice message system.</li>
                            <li>24/7 support and customer care.</li>
                        </ul>
                        <NavLink className="signUp" exact to="/sign-up"><div className="button" id="signUpButton">Try today</div></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
