import "./details.scss";
import { NavLink } from "react-router-dom";

export default function Details() {
    return (
        <div className="details">
            <div className="container">
                <div className="header">
                    <img src="assets/logoEye.svg" alt="" />
                    <h1>Drive forward the growth of your business today.</h1>
                </div>
                <div className="text">
                    <p>
                        Observer is a seamless multiplatform app that is incredibly easy to get the grips of.
                        With the newly added importing tool making the switch is quick and hassle free.
                    </p>
                </div>
            </div>
            <div className="buttons">
                <NavLink className="signUp" exact to="/sign-up"><div className="button" id="signUpButton">Sign up</div></NavLink>
                <p>Already using Observer? <NavLink exact to="/sign-in">Sign in now.</NavLink></p>
            </div>
            <div className="squares">
                <div className="square">
                    <img src="assets/multiLogo.svg" alt="" />
                    <p><span>Observer is a multiplatform</span> app allowing your business to rapidly deploy it onto multiple operating systems.</p>
                </div>
                <div className="square">
                    <img src="assets/simpleLogo.svg" alt="" />
                    <p><span>Simple but powerful</span> Observer is quick to learn, but don't be fooled its incredibly powerful behind the hood.</p>
                </div>
                <div className="square">
                    <img src="assets/performanceLogo.svg" alt="" />
                    <p><span>Great performance</span> allows for a fast workflow allowing your business to rapidly deploy projects.</p>
                </div>
            </div>
        </div>
    )
}
