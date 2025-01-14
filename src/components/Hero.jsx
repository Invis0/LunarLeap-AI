import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaRobot } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary/20 to-primary-light/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Welcome to the Future of Trading
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            AI-Powered Trading{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Revolution
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
          >
            Experience the power of advanced AI algorithms and real-time market analysis
            to enhance your trading strategies and maximize potential returns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-black px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-colors"
            >
              <FaRocket className="w-5 h-5" />
              Buy on Pump.fun
            </a>
            <a
              href="#ai-tools"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-colors"
            >
              <FaRobot className="w-5 h-5" />
              Try AI Tools
            </a>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="bg-dark-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FaRobot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-400">Advanced algorithms analyze market trends and patterns in real-time.</p>
            </div>
            <div className="bg-dark-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FaChartLine className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Smart Trading</h3>
              <p className="text-gray-400">Automated strategies and intelligent trade execution for optimal results.</p>
            </div>
            <div className="bg-dark-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FaRocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Community Rewards</h3>
              <p className="text-gray-400">Earn rewards through our leaderboard system and community engagement.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 