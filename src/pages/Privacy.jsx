import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-dark-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-400">
                At LunarLeap AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div className="bg-dark-secondary rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Wallet addresses</li>
                    <li>Trading history</li>
                    <li>Email address (optional)</li>
                    <li>Usage data and preferences</li>
                  </ul>
                </div>
                
                <div className="bg-dark-secondary rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3">Technical Data</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Cookies and usage data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <div className="bg-dark-secondary rounded-lg p-6">
                <ul className="space-y-4 text-gray-400">
                  <li>• To provide and maintain our Service</li>
                  <li>• To detect and prevent fraud</li>
                  <li>• To improve our trading algorithms</li>
                  <li>• To communicate with you about updates</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-400 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-dark-secondary rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Security Measures</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>End-to-end encryption</li>
                  <li>Regular security audits</li>
                  <li>Secure data storage</li>
                  <li>Access controls</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at privacy@lunarleap.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 