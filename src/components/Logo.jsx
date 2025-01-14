import { motion } from 'framer-motion';
import { FaRocket, FaBrain } from 'react-icons/fa';

const Logo = ({ className = '', showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-lg"
        />
        <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-xl transform rotate-12">
          <FaRocket className="w-5 h-5 text-white transform -rotate-12" />
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-primary/20 rounded-xl blur-md"
        />
      </div>
      {showText && (
        <div className="flex items-center gap-1">
          <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Lunar
          </span>
          <div className="flex items-center gap-1">
            <span className="font-display text-xl font-bold text-white">Leap</span>
            <FaBrain className="w-4 h-4 text-primary animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo; 