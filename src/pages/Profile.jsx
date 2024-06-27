import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/authActions';
import { Navigate } from 'react-router-dom';
import { startEditing, stopEditing } from '../reducers/authReducer';

import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isEditing = useSelector((state) => state.auth.isEditing);

  const [profile, setProfile] = useState({ firstName: '', lastName: '' });
  const [initialProfile, setInitialProfile] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    if (user) {
      setProfile({ firstName: user.firstName, lastName: user.lastName });
      setInitialProfile({ firstName: user.firstName, lastName: user.lastName });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleEditClick = () => {
    dispatch(startEditing());
  };

  const handleSaveClick = () => {
    dispatch(updateUser(profile));
  };

  const handleCancelClick = () => {
    setProfile(initialProfile);
    dispatch(stopEditing());
  };

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user ? `${profile.firstName} ${profile.lastName}` : 'Guest'}!
          </h1>
          {isEditing ? (
            <div>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
              />
              <button onClick={handleCancelClick}>Cancel</button>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          )}
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
