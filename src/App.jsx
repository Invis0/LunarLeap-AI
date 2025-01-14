import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { WalletContextProvider } from './components';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import ApiDocs from './pages/ApiDocs';
import BrandAssets from './pages/BrandAssets';
import Whitepaper from './pages/Whitepaper';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import GradientBackground from './components/GradientBackground';

// Scroll to top component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <WalletContextProvider>
      <Router>
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
          <GradientBackground />
          <ScrollToTop />
          <Navbar />
          <div className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs/getting-started" element={<Documentation />} />
              <Route path="/api-docs" element={<ApiDocs />} />
              <Route path="/brand-assets" element={<BrandAssets />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </WalletContextProvider>
  );
}

export default App; 