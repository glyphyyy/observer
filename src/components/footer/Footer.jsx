import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="colLogo">
                    <img src="assets/logo.svg" alt="" />
                    <p>Copyright © 2021 Observer, Tech Corp, Inc. All rights reserved.</p>
                </div>
                <div className="colLinks">
                    <div className="col">
                        <ul>
                            <li className="header">Observer</li>
                            <li>Home</li>
                            <li>Products</li>
                            <li>How it works</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className="header">Docs</li>
                            <li>Tech Specs</li>
                            <li>API</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className="header">Socials</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
