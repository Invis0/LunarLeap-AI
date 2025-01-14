import { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const mockActivities = [
  {
    id: 1,
    type: 'buy',
    coin: 'BTC',
    amount: '0.25',
    price: '42,150.00',
    timestamp: '2024-03-20T10:30:00Z',
    profit: '+2.5%'
  },
  {
    id: 2,
    type: 'sell',
    coin: 'ETH',
    amount: '1.5',
    price: '2,250.00',
    timestamp: '2024-03-20T09:15:00Z',
    profit: '-1.2%'
  },
  // Add more mock activities as needed
];

const ActivityFeed = () => {
  const [activities] = useState(mockActivities);

  return (
    <div className="bg-dark-secondary rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-3 bg-dark-primary rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                activity.type === 'buy' ? 'bg-green-500/20' : 'bg-red-500/20'
              }`}>
                {activity.type === 'buy' ? (
                  <FaArrowUp className="text-green-500" />
                ) : (
                  <FaArrowDown className="text-red-500" />
                )}
              </div>
              <div>
                <p className="font-medium">
                  {activity.type === 'buy' ? 'Bought' : 'Sold'} {activity.amount} {activity.coin}
                </p>
                <p className="text-sm text-gray-400">
                  ${activity.price} • {new Date(activity.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className={`font-medium ${
              activity.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}>
              {activity.profit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed; 