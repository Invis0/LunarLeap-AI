import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaRobot, FaSearch, FaShieldAlt, FaUsersCog } from 'react-icons/fa';

const features = [
  {
    title: 'Smart Trading Analysis',
    description: 'Advanced AI algorithms analyze market trends and provide real-time trading insights.',
    icon: FaChartLine,
    color: 'from-blue-500 to-purple-500',
    delay: 0.1
  },
  {
    title: 'Sentiment Analysis',
    description: 'Monitor social media and news sentiment to predict market movements.',
    icon: FaBrain,
    color: 'from-green-500 to-teal-500',
    delay: 0.2
  },
  {
    title: 'AI Trading Bot',
    description: 'Automated trading strategies powered by machine learning algorithms.',
    icon: FaRobot,
    color: 'from-purple-500 to-pink-500',
    delay: 0.3
  },
  {
    title: 'Market Research',
    description: 'Deep dive into market data with AI-powered research tools.',
    icon: FaSearch,
    color: 'from-orange-500 to-red-500',
    delay: 0.4
  },
  {
    title: 'Risk Management AI',
    description: 'Advanced risk assessment and portfolio protection using predictive AI.',
    icon: FaShieldAlt,
    color: 'from-red-500 to-pink-500',
    delay: 0.5
  },
  {
    title: 'Community Intelligence',
    description: 'Collective trading insights powered by AI analysis of community behavior.',
    icon: FaUsersCog,
    color: 'from-blue-600 to-indigo-600',
    delay: 0.6
  }
];

const AIFeatures = () => {
  return (
    <section id="ai-features" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary/20 to-primary-light/20 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              AI Features
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold">
              Powered by Advanced{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                AI Technology
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Experience the future of trading with our cutting-edge AI features designed to give you the competitive edge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                className="group relative"
              >
                <div className="relative z-10 bg-dark-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full transform transition-transform group-hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>

                  {/* Interactive hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Points System Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-16 bg-dark-secondary/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Earn Points Using AI Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-dark-accent/50 rounded-xl">
                <div className="text-primary font-bold mb-2">Trading Analysis</div>
                <p className="text-sm text-gray-400">Earn 10 points per successful trade prediction</p>
              </div>
              <div className="p-4 bg-dark-accent/50 rounded-xl">
                <div className="text-primary font-bold mb-2">Market Research</div>
                <p className="text-sm text-gray-400">Earn 5 points for each research session</p>
              </div>
              <div className="p-4 bg-dark-accent/50 rounded-xl">
                <div className="text-primary font-bold mb-2">Community Insights</div>
                <p className="text-sm text-gray-400">Earn 15 points for valuable community contributions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures; 