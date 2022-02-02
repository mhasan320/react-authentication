import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <div className="App h-screen">
    <Router>
      <AuthProvider>
          <Routes>
            <Route path="/" 
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }/>
            <Route path="/updateprofile" element={
              <PrivateRoute>
                <UpdateProfile/>
              </PrivateRoute>
            }/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            
          </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
