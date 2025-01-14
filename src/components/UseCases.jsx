import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaChartLine, FaUsers } from 'react-icons/fa';

const useCases = [
  {
    icon: FaRobot,
    title: 'AI-Powered Trading',
    description: 'Advanced algorithms analyze market trends and execute trades with precision, maximizing your potential returns.',
    comingSoon: false,
  },
  {
    icon: FaCode,
    title: 'Smart Contract Integration',
    description: 'Seamlessly integrate with popular DeFi protocols and automate your trading strategies.',
    comingSoon: true,
  },
  {
    icon: FaChartLine,
    title: 'Market Analysis',
    description: 'Real-time market analysis and predictions powered by state-of-the-art machine learning models.',
    comingSoon: false,
  },
  {
    icon: FaUsers,
    title: 'Community Governance',
    description: 'Participate in key decisions through our decentralized voting system.',
    comingSoon: true,
  }
];

const UseCases = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Use Cases
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-3xl sm:text-4xl font-display font-bold"
          >
            Transforming DeFi with{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              AI Innovation
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCaseCard = ({ icon: Icon, title, description, comingSoon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl transform -rotate-1" />
    <div className="relative p-8 bg-dark-secondary/90 backdrop-blur-lg rounded-2xl border border-white/10">
      <div className="flex items-start justify-between">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        {comingSoon && (
          <span className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm">
            Coming Soon
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <div className="mt-6">
        <button className="text-primary hover:text-primary-light transition-colors inline-flex items-center">
          Learn more
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </motion.div>
);

export default UseCases; 