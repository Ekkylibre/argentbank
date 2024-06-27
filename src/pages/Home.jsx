import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Home;
