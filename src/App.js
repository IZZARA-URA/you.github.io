import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Educations from './components/educations/Educations';
// import Pad from './components/pad/Pad'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Educations />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
