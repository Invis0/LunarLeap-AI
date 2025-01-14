import React from 'react';
import Logo from '../components/Logo';
import { FaDownload } from 'react-icons/fa';

const BrandAssets = () => {
  const handleDownload = (type, variant) => {
    const filename = `lunar-leap-${variant}.${type}`;
    const link = document.createElement('a');
    link.href = `/brand/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-dark-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Brand Assets</h1>
          
          <div className="space-y-12">
            {/* Logo Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Logo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-secondary rounded-lg p-6">
                  <div className="bg-dark-primary rounded-lg p-8 flex items-center justify-center mb-4">
                    <Logo showText={false} className="w-24 h-24" />
                  </div>
                  <h3 className="font-medium mb-2">Icon Only</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDownload('png', 'icon')}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm hover:bg-primary/30 transition-colors"
                    >
                      <FaDownload className="w-4 h-4" />
                      PNG
                    </button>
                    <button 
                      onClick={() => handleDownload('svg', 'icon')}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm hover:bg-primary/30 transition-colors"
                    >
                      <FaDownload className="w-4 h-4" />
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
                    <button 
                      onClick={() => handleDownload('png', 'full')}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm hover:bg-primary/30 transition-colors"
                    >
                      <FaDownload className="w-4 h-4" />
                      PNG
                    </button>
                    <button 
                      onClick={() => handleDownload('svg', 'full')}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm hover:bg-primary/30 transition-colors"
                    >
                      <FaDownload className="w-4 h-4" />
                      SVG
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Banner Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Social Media Banner</h2>
              <div className="space-y-6">
                <div className="bg-dark-secondary rounded-lg p-6">
                  <div className="bg-dark-primary rounded-lg p-4 mb-4 relative overflow-hidden">
                    {/* Twitter Banner Preview - 1500x500 pixels */}
                    <div className="relative aspect-[3/1] rounded-lg overflow-hidden">
                      {/* Background with animated gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-light/10 to-primary/5" />
                      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full max-w-2xl mx-auto px-8 flex items-center gap-8">
                          <Logo className="w-32 h-32" />
                          <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">
                              LunarLeap AI
                            </h1>
                            <p className="text-lg text-gray-300">
                              Next-gen AI-powered Trading Platform
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDownload('png', 'twitter-banner')}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm hover:bg-primary/30 transition-colors"
                    >
                      <FaDownload className="w-4 h-4" />
                      Download Banner (PNG)
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Colors */}
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