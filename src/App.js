import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Pages/Home";
import Classes from "./components/Pages/Classes";
import Profile from "./components/Pages/Profile";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import ProtectedRoute from "./components/Pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Stats from "./components/Pages/Stats";

function App() {
  return (
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/Home"
                element={
                  <ProtectedRoute>
                    <Nav />
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="Classes" element={<Classes />} />
              <Route path="Stats" element={<Stats />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
  );
}

export default App;