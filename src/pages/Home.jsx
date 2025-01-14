import { useState } from 'react';
import {
  Hero,
  Features,
  AIFeatures,
  AIChat,
  Leaderboard,
  Roadmap,
  WalletGuide,
  Partners
} from '../components';

const Home = () => {
  const [showWalletGuide, setShowWalletGuide] = useState(false);

  return (
    <div className="relative">
      <main className="relative">
        <Hero />
        <Partners />
        <AIFeatures />
        <AIChat />
        <Features />
        <Leaderboard onWalletClick={() => setShowWalletGuide(true)} />
        <Roadmap />
      </main>
      {showWalletGuide && <WalletGuide onClose={() => setShowWalletGuide(false)} />}
    </div>
  );
};

export default Home; 