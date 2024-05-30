import "./app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserPage from "./pages/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default App;
