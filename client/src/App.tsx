import "./App.css";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import {
  DASHBOARD,
  HOME,
  LOGIN,
  PRESIGNUP,
  SIGNUP,
  LOG_WEIGHT,
  WEIGHTS,
} from "./routes/routes";
import { PreSignUp } from "./pages/PreSignUp";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { LogWeight } from "./pages/LogWeight";
import { Toaster } from "react-hot-toast";
import { AllWeights } from "./components/AllWeights";

function App() {
  const isAuthenticated = () => {
    return true;
  };

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated() ? children : <Navigate to={LOGIN} />;
  };

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<SignUp />} />
        <Route path={PRESIGNUP} element={<PreSignUp />} />
        <Route
          path={LOG_WEIGHT}
          element={
            <PrivateRoute>
              <LogWeight />
            </PrivateRoute>
          }
        />
        <Route
          path={DASHBOARD}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={WEIGHTS}
          element={
            <PrivateRoute>
              <AllWeights />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
