import { motion } from 'framer-motion';
import { FaLock, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: FaLock,
    title: 'Secure & Audited',
    description: 'Contract audited by leading security firms ensuring your investment is safe.'
  },
  {
    icon: FaRocket,
    title: 'Deflationary Mechanics',
    description: 'Innovative tokenomics with automatic burn mechanism to increase value over time.'
  },
  {
    icon: FaUsers,
    title: 'Community Driven',
    description: 'Governance system allowing holders to vote on important decisions.'
  },
  {
    icon: FaChartLine,
    title: 'Staking Rewards',
    description: 'Earn passive income by staking your $LUNAR tokens.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold"
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              LunarLeap
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-400"
          >
            Built with security, scalability, and community in mind
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-6 rounded-2xl bg-dark-accent/50 backdrop-blur-lg border border-white/5 hover:border-primary/50 transition-colors group"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Features; 