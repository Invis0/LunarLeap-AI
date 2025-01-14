import React from 'react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-dark-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Documentation</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <div className="prose prose-invert">
                <p className="text-gray-400">
                  Welcome to LunarLeap AI's documentation. This guide will help you get started with our AI-powered trading platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Quick Start Guide</h2>
              <div className="bg-dark-secondary rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Connect Your Wallet</h3>
                    <p className="text-gray-400">Connect your Web3 wallet to start using LunarLeap AI's features.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Configure AI Settings</h3>
                    <p className="text-gray-400">Set up your trading preferences and risk parameters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Start Trading</h3>
                    <p className="text-gray-400">Begin your journey with AI-powered crypto trading.</p>
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

export default Documentation; 