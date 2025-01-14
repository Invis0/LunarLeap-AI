import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaRocket } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-[300px] bg-dark-secondary border-l border-white/10 z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaRocket className="h-6 w-6 text-primary" />
                <span className="text-lg font-display font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  LunarLeap
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4">
              <ul className="space-y-2">
                <MenuItem href="#features" onClick={onClose}>Features</MenuItem>
                <MenuItem href="#tokenomics" onClick={onClose}>Tokenomics</MenuItem>
                <MenuItem href="#roadmap" onClick={onClose}>Roadmap</MenuItem>
                <MenuItem href="#faq" onClick={onClose}>FAQ</MenuItem>
              </ul>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <button className="w-full py-2 px-4 bg-primary hover:bg-primary-dark transition-colors rounded-lg font-medium">
                  Launch App
                </button>
              </div>
            </nav>

            {/* Social Links */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
              <div className="text-sm text-gray-400 text-center">
                Join our community
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const MenuItem = ({ href, children, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
    >
      {children}
    </a>
  </li>
);

export default MobileMenu; 