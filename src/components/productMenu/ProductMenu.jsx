import "./productMenu.scss";
import { NavLink } from "react-router-dom";

export default function ProductMenu({ productMenuOpen, setProductMenuOpen }) {
    return (
        <div className={"productMenu " + (productMenuOpen && "active")}
        onMouseEnter={() => setProductMenuOpen(productMenuOpen = true)}
        onMouseLeave={() => setProductMenuOpen(productMenuOpen = false)}
        >
            <ul>
                <li className="observer">
                <NavLink className="link" exact to= "/observer">
                    <div className="left">
                        <img src="assets/logoWhite.svg" alt="" />
                        <p>Observer the an all in one project management solution.</p>
                    </div>
                    <div className="right">
                        <img src="assets/arrowProduct.svg" alt="arrow" />
                    </div>
                </NavLink>
                </li>
                <li className="spyGlass">
                <NavLink className="link" exact to= "/observer">
                    <div className="left">
                        <h1>SpyGlass.</h1>
                        <p>Coming soon! Keep up to date on our latest product here.</p>
                    </div>
                    <div className="right">
                        <img src="assets/arrowProduct.svg" alt="arrow" />
                    </div>
                </NavLink>
                </li>
            </ul>
        </div>
    )
}
