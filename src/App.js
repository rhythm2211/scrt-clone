import './App.css';
import Navbar from './components/NavBar';
import Faq from './components/Faq';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import SlackApp from './components/SlackApp';

function App() {
  return (
    <div className="App"> 
    <Navbar />
    <Home/> 
    <About/>
    <SlackApp/>
    <Faq/>
    <Footer/>
    </div>
  );
}

export default App;
