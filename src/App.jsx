import "./app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
