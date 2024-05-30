// App.js
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
