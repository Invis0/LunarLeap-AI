import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaSpinner, FaChartLine, FaUsers, FaRobot } from 'react-icons/fa';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const mockLeaderboardData = [
  { address: '7xKX...9Ypq', points: 2850, rank: 1, activity: 'AI Trading Bot', earnings: '1.5 SOL' },
  { address: '3mNR...4Kpz', points: 2340, rank: 2, activity: 'Market Analysis', earnings: '0.75 SOL' },
  { address: '9vBM...2Hjx', points: 2120, rank: 3, activity: 'Community Insight', earnings: '0.5 SOL' },
  { address: '5qPL...8Wny', points: 1980, rank: 4, activity: 'Trading Analysis', earnings: '0.3 SOL' },
  { address: '2tKR...6Fmv', points: 1750, rank: 5, activity: 'Risk Management', earnings: '0.2 SOL' },
];

const earningActivities = [
  {
    icon: FaRobot,
    title: 'AI Trading Bot',
    points: '25-100',
    description: 'Earn points for each successful AI-powered trade'
  },
  {
    icon: FaChartLine,
    title: 'Market Analysis',
    points: '10-50',
    description: 'Points for using AI analysis tools and making accurate predictions'
  },
  {
    icon: FaUsers,
    title: 'Community Engagement',
    points: '5-30',
    description: 'Contribute insights and engage with the community'
  }
];

const Leaderboard = () => {
  const { publicKey, connected } = useWallet();
  const [userRank, setUserRank] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    if (connected && publicKey) {
      fetchUserData();
      // Simulate live updates
      const interval = setInterval(() => {
        updateRecentActivity();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [connected, publicKey]);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserPoints(Math.floor(Math.random() * 1000));
      setUserRank(Math.floor(Math.random() * 100) + 6);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateRecentActivity = () => {
    const activities = [
      'earned 25 points using AI Trading Bot',
      'received 10 points for market analysis',
      'got 15 points for community contribution'
    ];
    const addresses = ['4xKR...2Npq', '8mPL...5Wvz', '2hBM...7Kjx'];
    
    setRecentActivity(prev => {
      const newActivity = {
        address: addresses[Math.floor(Math.random() * addresses.length)],
        action: activities[Math.floor(Math.random() * activities.length)],
        time: new Date().toLocaleTimeString()
      };
      return [newActivity, ...prev].slice(0, 5);
    });
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <FaTrophy className="text-yellow-400 w-6 h-6" />;
      case 2: return <FaMedal className="text-gray-400 w-6 h-6" />;
      case 3: return <FaAward className="text-amber-600 w-6 h-6" />;
      default: return <span className="text-gray-400 font-bold">{rank}</span>;
    }
  };

  return (
    <section id="leaderboard" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Leaderboard
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold">
            Top <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Contributors</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Compete with other users and earn rewards for your engagement. Top performers receive SOL rewards weekly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard Table */}
          <div className="lg:col-span-2">
            <div className="bg-dark-secondary/50 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 text-left">Rank</th>
                      <th className="px-4 py-3 text-left">Wallet</th>
                      <th className="px-4 py-3 text-right">Points</th>
                      <th className="px-4 py-3 text-left">Recent Activity</th>
                      <th className="px-4 py-3 text-right">Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockLeaderboardData.map((user) => (
                      <motion.tr
                        key={user.address}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: user.rank * 0.1 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            {getRankIcon(user.rank)}
                          </div>
                        </td>
                        <td className="px-4 py-4 font-mono text-sm">
                          {user.address}
                        </td>
                        <td className="px-4 py-4 text-right">
                          <span className="text-primary font-medium">{user.points.toLocaleString()}</span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-400">
                          {user.activity}
                        </td>
                        <td className="px-4 py-4 text-right font-medium">
                          {user.earnings}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {!connected ? (
                <div className="mt-8 text-center">
                  <WalletMultiButton className="!bg-primary hover:!bg-primary-light !text-white !px-6 !py-3 !rounded-lg !font-medium !flex !items-center !justify-center !gap-2 !transition-colors !mx-auto" />
                  <p className="mt-2 text-sm text-gray-400">
                    Connect your Solana wallet to start earning points and compete for rewards
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-4 bg-white/5 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Your Wallet</p>
                      <p className="text-xl font-mono">{publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Your Rank</p>
                      {isLoading ? (
                        <FaSpinner className="w-5 h-5 animate-spin text-primary" />
                      ) : (
                        <p className="text-xl font-bold">#{userRank || '-'}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Your Points</p>
                      {isLoading ? (
                        <FaSpinner className="w-5 h-5 animate-spin text-primary" />
                      ) : (
                        <p className="text-xl font-bold text-primary">{userPoints.toLocaleString()}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Earning Activities & Live Feed */}
          <div className="space-y-6">
            {/* Earning Activities */}
            <div className="bg-dark-secondary/50 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
              <h3 className="text-lg font-bold mb-4">Ways to Earn</h3>
              <div className="space-y-4">
                {earningActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-dark-accent/30 rounded-lg">
                    <activity.icon className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{activity.title}</p>
                        <span className="text-sm text-primary">{activity.points} pts</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="bg-dark-secondary/50 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
              <h3 className="text-lg font-bold mb-4">Live Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="text-sm p-3 bg-dark-accent/30 rounded-lg">
                    <div className="flex items-center justify-between text-gray-400">
                      <span className="font-mono">{activity.address}</span>
                      <span>{activity.time}</span>
                    </div>
                    <p className="mt-1 text-white">{activity.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard; 