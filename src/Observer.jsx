import "./observer.scss"
import ProductObserver from './components/productObserver/ProductObserver';
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";

export default function Observer() {
    return (
        <div className="observer">
            <ProductObserver />
            <Banner />
            <Footer />
        </div>
    )
}
