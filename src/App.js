import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import About from './components/About';
import Projects from './components/Projects';
import Contactme from './components/Contactme';
import BackTopButton from './components/BackTopButton';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (

    <div className="App">

      <Layout >
       
        <Hero ></Hero>
        <Technologies ></Technologies>
        <About></About>
        <Projects></Projects>

        <Contactme></Contactme>

        <Footer></Footer>
       
      </Layout>

    </div>

  );
}

export default App;
