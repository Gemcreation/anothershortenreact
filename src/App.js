
import './App.css';
import Header from './components/Header';
// import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>         
        {/* <MobileNav/> */}
        <Hero/>
        <Stats/>
        <CTA/>
      </main>
        <Footer/>
    </>
  );
}

export default App;
