import React from 'react';

const ApiDocs = () => {
  return (
    <div className="min-h-screen bg-dark-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">API Reference</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
              <div className="bg-dark-secondary rounded-lg p-6">
                <p className="text-gray-400 mb-4">
                  All API requests require an API key to be included in the header.
                </p>
                <div className="bg-dark-primary p-4 rounded-md">
                  <code className="text-sm text-gray-300">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
              
              <div className="space-y-6">
                {/* Market Data Endpoint */}
                <div className="bg-dark-secondary rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded text-sm">GET</span>
                    <code className="text-gray-300">/api/v1/market/data</code>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Retrieve real-time market data for specified trading pairs.
                  </p>
                  <div className="bg-dark-primary p-4 rounded-md">
                    <pre className="text-sm text-gray-300">
{`{
  "pair": "BTC/USDT",
  "timeframe": "1h",
  "limit": 100
}`}
                    </pre>
                  </div>
                </div>

                {/* AI Predictions Endpoint */}
                <div className="bg-dark-secondary rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded text-sm">POST</span>
                    <code className="text-gray-300">/api/v1/ai/predict</code>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Get AI-powered price predictions and trading signals.
                  </p>
                  <div className="bg-dark-primary p-4 rounded-md">
                    <pre className="text-sm text-gray-300">
{`{
  "pair": "ETH/USDT",
  "timeframe": "4h",
  "indicators": ["RSI", "MACD"]
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs; 