import "./burgerMenu.scss";
import { NavLink } from "react-router-dom";

export default function BurgerMenu({ burgerMenuOpen, setBurgerMenuOpen }) {
    return (
        <div className={"burgerMenu " + (burgerMenuOpen && "active")}>
            <ul>
                <li id="observerProduct" onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/observer">Observer</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24.08" height="35.843" viewBox="0 0 24.08 35.843">
                        <g id="arrow" transform="translate(-127.681 -41.181)">
                            <line id="line1" data-name="Line 1" x2="18.442" y2="15.607" transform="translate(130.5 44)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                            <line id="line2" data-name="Line 2" y1="14.607" x2="18.442" transform="translate(130.5 59.607)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                        </g>
                    </svg>
                </li>
                <li id="howItWorks" onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/howitworks">How it works</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24.08" height="35.843" viewBox="0 0 24.08 35.843">
                        <g id="arrow" transform="translate(-127.681 -41.181)">
                            <line id="line1" data-name="Line 1" x2="18.442" y2="15.607" transform="translate(130.5 44)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                            <line id="line2" data-name="Line 2" y1="14.607" x2="18.442" transform="translate(130.5 59.607)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                        </g>
                    </svg>
                </li>
                <li id="pricing" onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/pricing">Pricing</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24.08" height="35.843" viewBox="0 0 24.08 35.843">
                        <g id="arrow" transform="translate(-127.681 -41.181)">
                            <line id="line1" data-name="Line 1" x2="18.442" y2="15.607" transform="translate(130.5 44)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                            <line id="line2" data-name="Line 2" y1="14.607" x2="18.442" transform="translate(130.5 59.607)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                        </g>
                    </svg>
                </li>
                <li id="signIn" onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/sign-in">Sign in</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24.08" height="35.843" viewBox="0 0 24.08 35.843">
                        <g id="arrow" transform="translate(-127.681 -41.181)">
                            <line id="line1" data-name="Line 1" x2="18.442" y2="15.607" transform="translate(130.5 44)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                            <line id="line2" data-name="Line 2" y1="14.607" x2="18.442" transform="translate(130.5 59.607)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                        </g>
                    </svg>
                </li>
            </ul>
        </div>
    )
}
