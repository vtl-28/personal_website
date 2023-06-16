import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
