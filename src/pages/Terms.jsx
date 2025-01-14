import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-dark-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-gray-400">
                By accessing or using LunarLeap AI's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <div className="bg-dark-secondary rounded-lg p-6 space-y-4">
                <p className="text-gray-400">
                  Permission is granted to temporarily access the LunarLeap AI platform for personal, non-commercial transactional use. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Risk Disclosure</h2>
              <div className="bg-dark-secondary rounded-lg p-6">
                <p className="text-gray-400 mb-4">
                  Cryptocurrency trading involves substantial risk and is not suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before using our platform.
                </p>
                <div className="bg-primary/10 rounded p-4">
                  <p className="text-primary font-medium">Important Notice:</p>
                  <p className="text-gray-400">
                    Past performance is not indicative of future results. Trading cryptocurrencies can result in the loss of your invested capital.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Platform Rules</h2>
              <div className="space-y-4">
                <div className="bg-dark-secondary rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3">User Obligations</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Maintain accurate account information</li>
                    <li>Protect account credentials</li>
                    <li>Report unauthorized access</li>
                    <li>Comply with all applicable laws</li>
                  </ul>
                </div>
                
                <div className="bg-dark-secondary rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3">Prohibited Activities</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Market manipulation</li>
                    <li>Unauthorized API access</li>
                    <li>Distribution of malware</li>
                    <li>Interference with platform operations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-gray-400">
                We reserve the right to terminate or suspend access to our platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-400">
                For any questions regarding these Terms, please contact us at legal@lunarleap.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 