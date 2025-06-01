import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment";
import Admin from "./components/Admin";
import LoginPage from "./components/Login";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated === "true" ? children : <Navigate to="/login" replace />;
};



const AppContent = () => {
  const location = useLocation();

  // Hide Navbar for specific routes (e.g., admin, login)
  const hideNavbarRoutes = ["/admin", "/login"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Section2 id="services" />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 id="contact" />
              <Footer />
            </>
          }
        />

        {/* Appointments Page */}
        <Route path="/appointment" element={<Appointment />} />

        {/* Admin Page (Always Redirect to Login First) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
