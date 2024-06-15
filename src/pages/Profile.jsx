import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    // Vous pouvez implémenter ici une logique pour charger les détails du profil si nécessaire
    // Par exemple, dispatch une action pour récupérer les informations du profil depuis le backend
  }, []);

  const handleLogin = () => {
    // Exemple de fonction pour se connecter, appelant votre action `login`
    dispatch(login('example@email.com', 'password123')); // Remplacez par vos variables de formulaire
  };

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user && user.firstName ? user.firstName : 'Guest'}!</h1>
          <button className="edit-button" onClick={handleLogin}>Login</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
