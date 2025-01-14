import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'AI Tools', href: '#ai-tools' },
  { name: 'Leaderboard', href: '#leaderboard' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Buy $LUNAR', href: 'https://pump.fun/coin/52DcS47pkcb7L1XgB7TSAHhf6hpFWrCPKhyiwuNnpump', external: true }
];

const Navbar = ({ onWalletClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { connected } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, external) => {
    if (!external) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWalletClick = (e) => {
    if (!connected && onWalletClick) {
      e.preventDefault();
      onWalletClick();
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className={`h-16 rounded-2xl ${
            scrolled 
              ? 'bg-dark-primary/80 backdrop-blur-xl shadow-lg shadow-primary/5 border border-white/5' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-full px-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 cursor-pointer"
              onClick={handleLogoClick}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => !item.external && handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5 relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId={`nav-hover-${item.name}`}
                  />
                </a>
              ))}
            </div>

            {/* Wallet Connection */}
            <div className="hidden md:flex items-center gap-4">
              <WalletMultiButton 
                className="!bg-primary hover:!bg-primary-light !text-black !px-6 !py-2 !rounded-lg !font-medium !flex !items-center !gap-2 !transition-all !duration-200 hover:!scale-105"
                onClick={handleWalletClick}
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {isOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-4 rounded-xl bg-dark-primary/95 backdrop-blur-xl border border-white/5 shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => !item.external && handleNavClick(e, item.href)}
                  className="block px-4 py-2 text-base text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <WalletMultiButton 
                  className="!w-full !bg-primary hover:!bg-primary-light !text-black !px-6 !py-3 !rounded-lg !font-medium !flex !items-center !justify-center !gap-2 !transition-all !duration-200"
                  onClick={handleWalletClick}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 