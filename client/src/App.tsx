import "./App.css";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

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
  TIMER,
} from "./routes/routes";
import { PreSignUp } from "./pages/Auth/PreSignUp";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import { LogWeight } from "./pages/Log-Weight/LogWeight";
import { Toaster } from "react-hot-toast";
import { AllWeights } from "./components/Log-Weights/AllWeights";
import { AppLayout } from "./pages/App-Layout/AppLayout";
import Routine from "./components/Routine/Routine";
import Dashboard from "@/components/Dashboard/Dashboard";
import { ALlExercises } from "./components/Exercise/AllExercises";
import { Settings } from "./pages/Settings/Settings";
import UploadProfile from "./components/Upload-Profile/UploadProfile";
import { TimerPage } from "./pages/Timer/TimerPage";
import RoutineSession from "./components/Routine/RoutineSession";

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
            path={`${ROUTINE}/:title/:id/session`}
            element={
              <PrivateRoute>
                <RoutineSession />
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
          <Route
            path={TIMER}
            element={
              <PrivateRoute>
                <TimerPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
