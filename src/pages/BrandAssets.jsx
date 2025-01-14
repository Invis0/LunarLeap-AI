import React from 'react';
import Logo from '../components/Logo';

const BrandAssets = () => {
  return (
    <div className="min-h-screen bg-dark-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Brand Assets</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Logo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-secondary rounded-lg p-6">
                  <div className="bg-dark-primary rounded-lg p-8 flex items-center justify-center mb-4">
                    <Logo showText={false} className="w-24 h-24" />
                  </div>
                  <h3 className="font-medium mb-2">Icon Only</h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-primary/20 text-primary rounded text-sm hover:bg-primary/30 transition-colors">
                      PNG
                    </button>
                    <button className="px-3 py-1 bg-primary/20 text-primary rounded text-sm hover:bg-primary/30 transition-colors">
                      SVG
                    </button>
                  </div>
                </div>

                <div className="bg-dark-secondary rounded-lg p-6">
                  <div className="bg-dark-primary rounded-lg p-8 flex items-center justify-center mb-4">
                    <Logo className="w-48" />
                  </div>
                  <h3 className="font-medium mb-2">Full Logo</h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-primary/20 text-primary rounded text-sm hover:bg-primary/30 transition-colors">
                      PNG
                    </button>
                    <button className="px-3 py-1 bg-primary/20 text-primary rounded text-sm hover:bg-primary/30 transition-colors">
                      SVG
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Brand Colors</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 rounded-lg bg-primary"></div>
                  <p className="font-medium">Primary</p>
                  <code className="text-sm text-gray-400">#4F46E5</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-lg bg-primary-light"></div>
                  <p className="font-medium">Primary Light</p>
                  <code className="text-sm text-gray-400">#818CF8</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-lg bg-dark-primary"></div>
                  <p className="font-medium">Dark Primary</p>
                  <code className="text-sm text-gray-400">#111827</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-lg bg-dark-secondary"></div>
                  <p className="font-medium">Dark Secondary</p>
                  <code className="text-sm text-gray-400">#1F2937</code>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAssets; 