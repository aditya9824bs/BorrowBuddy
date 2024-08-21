import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Feature";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import SignupPage from "./components/Signup";
import LoginPage from "./components/Login";
import "./styles.css";
import FeaturesPage from "./components/FeaturesPage";

function App() {
  React.useEffect(() => {
    (async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      const LocomotiveScroll = new locomotiveScroll();
    })();
  }, []);
  return (
    <Router>
      <div className="relative">
        <div className="background-image"></div> {/* Background image */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features />
                <CallToAction />
              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/featuresPage" element={<FeaturesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
