import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChartLine, FaArrowUp, FaDollarSign } from 'react-icons/fa';

const PriceChart = () => {
  const [timeframe, setTimeframe] = useState('24h');
  
  // Mock data points for the chart
  const chartPoints = "M0,100 L20,95 L40,98 L60,92 L80,96 L100,88 L120,90 L140,85 L160,87 L180,82 L200,84 L220,78 L240,80 L260,75 L280,78 L300,72";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mt-16 p-6 bg-dark-secondary/50 backdrop-blur-lg rounded-2xl border border-white/10"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <FaDollarSign className="text-primary" />
            <span>$LUNAR Price</span>
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-3xl font-bold">$0.000042</span>
            <span className="text-green-400 flex items-center">
              <FaArrowUp className="mr-1" />
              24.5%
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {['1h', '24h', '7d', '30d'].map((time) => (
            <button
              key={time}
              onClick={() => setTimeframe(time)}
              className={`px-3 py-1 rounded-lg ${
                timeframe === time
                  ? 'bg-primary text-white'
                  : 'bg-dark-accent/50 text-gray-400 hover:text-white'
              } transition-colors`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-[300px] w-full">
        {/* Chart background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-lg" />

        {/* Price chart */}
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 25}
              x2="300"
              y2={i * 25}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Chart line */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d={chartPoints}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#3385FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Chart overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary/50 via-transparent to-transparent" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <Stat label="Market Cap" value="$42M" />
        <Stat label="24h Volume" value="$2.5M" />
        <Stat label="Holders" value="12.5K" />
      </div>
    </motion.div>
  );
};

const Stat = ({ label, value }) => (
  <div className="p-4 bg-dark-accent/30 rounded-lg">
    <div className="text-gray-400 text-sm">{label}</div>
    <div className="text-xl font-bold mt-1">{value}</div>
  </div>
);

export default PriceChart; 