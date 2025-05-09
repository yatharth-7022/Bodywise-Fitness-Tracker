import "./App.css";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import {
  DASHBOARD,
  HOME,
  LOGIN,
  PRESIGNUP,
  SIGNUP,
  LOG_WEIGHT,
  WEIGHTS,
  ROUTINE,
  EXERCISES,
  SETTINGS,
  UPLOAD_PROFILE_PICTURE,
} from "./routes/routes";
import { PreSignUp } from "./pages/PreSignUp";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { LogWeight } from "./pages/LogWeight";
import { Toaster } from "react-hot-toast";
import { AllWeights } from "./components/AllWeights";
import { AppLayout } from "./pages/AppLayout";
import Routine from "./components/Routine";
import Dashboard from "@/pages/Dashboard";
import { ALlExercises } from "./components/Exercise/AllExercises";
import { Settings } from "./pages/Settings";
import UploadProfile from "./pages/UploadProfile";

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated() ? children : <Navigate to={LOGIN} />;
  };

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <AppLayout>
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
          <Route
            path={EXERCISES}
            element={
              <PrivateRoute>
                <ALlExercises />
              </PrivateRoute>
            }
          />
          <Route
            path={`${ROUTINE}/:title/:id`}
            element={
              <PrivateRoute>
                <Routine />
              </PrivateRoute>
            }
          />
          <Route
            path={SETTINGS}
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path={UPLOAD_PROFILE_PICTURE}
            element={
              <PrivateRoute>
                <UploadProfile />
              </PrivateRoute>
            }
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
