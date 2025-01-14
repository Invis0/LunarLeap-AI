import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaRobot, FaMobile, FaGlobe } from 'react-icons/fa';

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Launch',
    status: 'completed',
    icon: FaRocket,
    color: 'from-green-500 to-emerald-500',
    items: [
      'Smart Contract Development',
      'Website Launch',
      'Community Building',
      'Initial Marketing'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    status: 'in-progress',
    icon: FaChartLine,
    color: 'from-primary to-primary-light',
    items: [
      'Launch on Pump.fun $LUNAR',
      'AI Trading Bot Beta',
      'Community Expansion',
      'Partnership Development'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'AI Integration',
    status: 'upcoming',
    icon: FaRobot,
    color: 'from-purple-500 to-pink-500',
    items: [
      'Advanced Trading AI',
      'Market Analysis Tools',
      'Sentiment Analysis',
      'Portfolio Management'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    status: 'upcoming',
    icon: FaMobile,
    color: 'from-blue-500 to-indigo-500',
    items: [
      'Mobile App Launch',
      'Additional Exchange Listings',
      'Cross-chain Integration',
      'Global Marketing Campaign'
    ]
  },
  {
    phase: 'Phase 5',
    title: 'Evolution',
    status: 'upcoming',
    icon: FaGlobe,
    color: 'from-amber-500 to-orange-500',
    items: [
      'DAO Governance',
      'Advanced AI Features',
      'Institutional Partnerships',
      'Ecosystem Expansion'
    ]
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary/20 to-primary-light/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Roadmap
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold">
            Our Journey to{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Follow our development journey as we revolutionize AI-powered trading and analysis.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {/* Roadmap items */}
          <div className="space-y-24">
            {roadmapData.map((item, index) => (
              <RoadmapItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RoadmapItem = ({ phase, title, status, icon: Icon, color, items, index }) => {
  const isEven = index % 2 === 0;
  const statusColors = {
    completed: 'bg-green-500',
    'in-progress': 'bg-primary',
    upcoming: 'bg-gray-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-dark-primary border-2 border-primary" />

      <div className={`${isEven ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16'}`}>
        <div className={`inline-flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
          <div className={`p-3 rounded-xl bg-gradient-to-r ${color} bg-opacity-10`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm text-primary font-medium">{phase}</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`flex items-center gap-2 text-gray-400 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${statusColors[status]}`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block" />
    </motion.div>
  );
};

export default Roadmap; 