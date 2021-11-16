import "./banner.scss";
import { NavLink } from "react-router-dom";

export default function Banner() {
    return (
        <div className="banner">
            <h1>Observer.</h1>
            <h2>Join the <span id="green">large</span> and ever growing Observer community <span id="line">today! Be part of something special.</span></h2>
            <div className="wrapper">
                <NavLink className="signUp" exact to="/sign-up"><div className="button" id="signUpButton">Sign up</div></NavLink>
                <NavLink className="pricing" exact to="/pricing"><div className="button" id="pricing">Pricing</div></NavLink>
            </div>
            <p>Already using Observer? <NavLink exact to="/sign-in">Sign in now.</NavLink></p>
            <img src="assets/Banner.svg" alt="" />
        </div>
    )
}
