import "./newsletter.scss"

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="top">
                <h1>Get updates and information on all things Observer!</h1>
                <p>
                    Subscribe to our newsletter today to keep up to date on all our products and systems.
                    <span>Just enter your email below!</span>
                    </p>
            </div>
            <div className="bottom">
                <div className="left">
                    <h2>Observer is currently used by some of our amazing partners.</h2>
                    <div className="partnerContainer">
                        <img src="assets/Dell.svg" alt="Dell logo" />
                        <img src="assets/Americanexpress.svg" alt="American Express logo" />
                        <img src="assets/Chase.svg" alt="Chase logo" />
                        <img src="assets/Citi.svg" alt="Citi logo" />
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    )
}
