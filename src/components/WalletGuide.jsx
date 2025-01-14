import { motion } from 'framer-motion';
import { FaWallet, FaCheck, FaExchangeAlt, FaShieldAlt, FaTimes } from 'react-icons/fa';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';

const steps = [
  {
    icon: FaWallet,
    title: 'Install a Wallet',
    description: 'Download and install a Solana wallet like Phantom, Solflare, or Backpack.',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: FaCheck,
    title: 'Create or Import',
    description: 'Create a new wallet or import your existing one.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: FaExchangeAlt,
    title: 'Connect Wallet',
    description: 'Click the connect button and select your preferred wallet.',
    color: 'from-primary to-primary-light'
  },
  {
    icon: FaShieldAlt,
    title: 'Stay Secure',
    description: 'Keep your seed phrase safe and never share it with anyone.',
    color: 'from-orange-500 to-red-500'
  }
];

const WalletGuide = ({ onClose }) => {
  const { connected } = useWallet();

  // Close guide when wallet is connected
  useEffect(() => {
    if (connected && onClose) {
      onClose();
    }
  }, [connected, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="bg-dark-secondary rounded-2xl max-w-2xl w-full p-6 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <FaTimes className="w-5 h-5 text-gray-400" />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Connect Your Wallet</h3>
          <p className="text-gray-400">
            Follow these simple steps to connect your Solana wallet and start using LunarLeap AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-accent/50 rounded-xl p-4 backdrop-blur-sm border border-white/5"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} mb-4 flex items-center justify-center`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <WalletMultiButton className="!bg-primary hover:!bg-primary-light !text-black !px-8 !py-3 !rounded-lg !font-medium !transition-colors" />
          <p className="mt-4 text-sm text-gray-400">
            By connecting a wallet, you agree to LunarLeap AI's Terms of Service
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WalletGuide; 