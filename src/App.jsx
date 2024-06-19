import './app.css';
import { Route, Routes, Navigate } from 'react-router-dom'; // Importez Navigate à la place de Redirect
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} /> {/* Redirige '/' vers '/sign-in' */}
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
