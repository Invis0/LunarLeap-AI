import { motion } from 'framer-motion';
import { FaFire, FaLock, FaUsers, FaRocket } from 'react-icons/fa';

const tokenomics = [
  {
    icon: FaUsers,
    title: 'Community Pool',
    percentage: '40%',
    description: 'Reserved for community rewards, airdrops, and ecosystem growth'
  },
  {
    icon: FaLock,
    title: 'Liquidity Pool',
    percentage: '30%',
    description: 'Locked for 2 years to ensure trading stability'
  },
  {
    icon: FaFire,
    title: 'Burn Mechanism',
    percentage: '20%',
    description: 'Automatic burn on every transaction to maintain deflation'
  },
  {
    icon: FaRocket,
    title: 'Development',
    percentage: '10%',
    description: 'For continued platform development and marketing'
  }
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold"
          >
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Tokenomics
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-400"
          >
            Total Supply: 1,000,000,000 $LUNAR
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenomics.map((item, index) => (
            <TokenomicsCard key={index} {...item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-6 rounded-2xl bg-dark-accent/50 backdrop-blur-lg border border-white/5"
        >
          <h3 className="text-xl font-bold mb-4">Transaction Tax: 5%</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TaxItem label="Liquidity" value="2%" />
            <TaxItem label="Reflection" value="2%" />
            <TaxItem label="Burn" value="1%" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TokenomicsCard = ({ icon: Icon, title, percentage, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-6 rounded-2xl bg-dark-accent/50 backdrop-blur-lg border border-white/5 hover:border-primary/50 transition-colors"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div className="text-2xl font-bold mb-2">{percentage}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const TaxItem = ({ label, value }) => (
  <div className="flex justify-between items-center p-4 rounded-lg bg-dark/50">
    <span className="text-gray-400">{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);

export default Tokenomics; 