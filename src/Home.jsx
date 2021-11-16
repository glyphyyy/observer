import './home.scss';
import Hero from './components/hero/Hero';
import { useEffect, useState } from 'react';
import Info from './components/info/Info';
import Details from './components/details/Details';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="circle" style={{transform: `translateY(${offsetY * 0.8}px)`}} />
      <div className="circleMedium" style={{transform: `translateY(${offsetY * 0.27}px)`}} />
      <div className="circleSmall" />
      <div className="bgSquare"/>
      <div className="bgSquareSmall" style={{transform: `translateY(${offsetY * 0.3}px)`}}/>
      <div className="bgSquareLarge" style={{transform: `translateY(${offsetY * 0.25}px)`}} />
      <div className="bgSquareBorder" style={{transform: `translateY(${offsetY * 0.4}px)`}} />
      <div className="bgLine1"/>
      <div className="bgLine2"/>
      <img className="guy" src="assets/guyFalling.svg" alt="" style={{transform: `translateY(${offsetY * 0.6}px)`}}/>
      <img className="girl" src="assets/girlFalling.svg" alt="" style={{transform: `translateY(${offsetY * 0.45}px)`}}/>
      <img className="guy2" src="assets/guyFalling2.svg" alt="" style={{transform: `translateY(${offsetY * 0.3}px)`}}/>
      <Hero />
      <Info />
      <Details />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
