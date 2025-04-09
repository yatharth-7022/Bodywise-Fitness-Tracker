import "./App.css";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { DASHBOARD, HOME, LOGIN, PRESIGNUP, SIGNUP } from "./routes/routes";
import { PreSignUp } from "./pages/PreSignUp";
function App() {
  const isAuthenticated = () => {
    // In a real application, you would check for a token, session, etc.
    return true;
  };

  // Private Route component to protect routes that require authentication
  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to={LOGIN} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<SignUp />} />
        <Route path={PRESIGNUP} element={<PreSignUp />} />

        <Route
          path={DASHBOARD}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
