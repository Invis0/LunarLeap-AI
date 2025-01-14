import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Binance',
    logo: '/partners/binance.svg'
  },
  {
    name: 'Solana',
    logo: '/partners/solana.svg'
  },
  {
    name: 'Coinbase',
    logo: '/partners/coinbase.svg'
  },
  {
    name: 'Kraken',
    logo: '/partners/kraken.svg'
  },
  {
    name: 'FTX',
    logo: '/partners/ftx.svg'
  },
  {
    name: 'Uniswap',
    logo: '/partners/uniswap.svg'
  }
];

const Partners = () => {
  return (
    <div className="py-12 bg-dark-secondary/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Trusted by Industry Leaders</h2>
          <p className="mt-2 text-gray-400">Partnering with the best in the crypto space</p>
        </div>
        
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-secondary/30 to-transparent z-10" />
          
          {/* Infinite Scroll Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First Set */}
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-shrink-0 h-12 w-32 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {partners.map((partner) => (
                <div
                  key={`${partner.name}-duplicate`}
                  className="flex-shrink-0 h-12 w-32 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 