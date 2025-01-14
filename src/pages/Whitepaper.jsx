import React from 'react';

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-dark-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">LunarLeap AI Whitepaper</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
              <div className="prose prose-invert">
                <p className="text-gray-400">
                  LunarLeap AI introduces a revolutionary approach to cryptocurrency trading by leveraging advanced artificial intelligence and machine learning algorithms. Our platform combines real-time market analysis, predictive modeling, and automated trading strategies to provide users with an edge in the volatile crypto markets.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <div className="bg-dark-secondary rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">AI Engine</h3>
                  <p className="text-gray-400">
                    Our proprietary AI engine utilizes transformer-based architecture combined with reinforcement learning to analyze market patterns and generate trading signals with high accuracy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Smart Contract Infrastructure</h3>
                  <p className="text-gray-400">
                    Built on Solana for lightning-fast execution and minimal fees, our smart contracts enable secure and efficient trading operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Data Processing</h3>
                  <p className="text-gray-400">
                    Real-time processing of market data from multiple sources using advanced stream processing and machine learning pipelines.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
              <div className="bg-dark-secondary rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-dark-primary rounded-lg">
                    <h4 className="font-medium mb-2">Total Supply</h4>
                    <p className="text-2xl font-bold text-primary">100,000,000</p>
                    <p className="text-sm text-gray-400">$LUNAR Tokens</p>
                  </div>
                  <div className="p-4 bg-dark-primary rounded-lg">
                    <h4 className="font-medium mb-2">Initial Price</h4>
                    <p className="text-2xl font-bold text-primary">$0.10</p>
                    <p className="text-sm text-gray-400">USD per token</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
              <div className="space-y-4">
                <div className="bg-dark-secondary rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3">Q1 2025</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Launch of beta testing program</li>
                    <li>Integration with major DEXs</li>
                    <li>Community governance implementation</li>
                  </ul>
                </div>
                <div className="bg-dark-secondary rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3">Q2 2025</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Mobile app release</li>
                    <li>Advanced trading features</li>
                    <li>Cross-chain expansion</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper; 