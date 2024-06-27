import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import SignInContent from '../components/SignInContent';

function SignIn() {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <SignInContent />
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
