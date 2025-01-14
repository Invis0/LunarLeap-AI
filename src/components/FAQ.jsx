import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is LunarLeap?',
    answer: 'LunarLeap is a next-generation memecoin built on the Ethereum blockchain, combining the fun of meme culture with real utility and innovative tokenomics.'
  },
  {
    question: 'How can I buy $LUNAR tokens?',
    answer: 'You can buy $LUNAR tokens through Uniswap by connecting your Web3 wallet and swapping ETH for $LUNAR. Make sure to set slippage to 5-6% to account for the transaction tax.'
  },
  {
    question: 'Is the contract audited?',
    answer: 'Yes, our smart contract has been audited by leading security firms including CertiK and Hacken to ensure maximum security for our holders.'
  },
  {
    question: 'What are the tokenomics?',
    answer: 'LunarLeap has a total supply of 1 billion tokens with a 5% transaction tax (2% liquidity, 2% reflection, 1% burn). 40% is allocated to the community pool, 30% to liquidity, 20% to burn, and 10% to development.'
  },
  {
    question: 'How do reflections work?',
    answer: 'Holders automatically receive a portion of each transaction in their wallet proportional to their holdings. This creates passive income just by holding $LUNAR tokens.'
  },
  {
    question: 'What makes LunarLeap unique?',
    answer: 'LunarLeap combines memecoin culture with real utility through our innovative staking system, DAO governance, and automatic burn mechanism. We also focus heavily on community engagement and long-term sustainability.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-white/5 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center bg-dark-accent/50 hover:bg-dark-accent/70 transition-colors"
      >
        <span className="font-medium text-left">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-dark-secondary/50 text-gray-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ; 