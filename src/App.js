import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Dashboard } from "./components/Dashboard";
import { Registrar } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/Protected";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registro" element={<Registrar />}></Route>
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
