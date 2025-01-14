import { useState } from 'react';
import { FaTwitter, FaTelegram, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const socialLinks = {
  twitter: 'https://x.com/LunarLeap_AI',
  telegram: 'https://t.me/LunarLeapAI',
  github: 'https://github.com/Invis0/LunarLeap-AI'
};

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "xxxxxxxxxxxxxxxxpump";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-dark-secondary/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400">
              Next-gen AI-powered trading and analysis platform, revolutionizing the way you interact with crypto.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#ai-tools">AI Tools</FooterLink>
              <FooterLink href="#roadmap">Roadmap</FooterLink>
              <FooterLink href="/whitepaper">Whitepaper</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/docs/getting-started">Documentation</FooterLink>
              <FooterLink href="https://pump.fun" external>Buy on Pump.fun</FooterLink>
              <FooterLink href="/api-docs">API Reference</FooterLink>
              <FooterLink href="/brand-assets">Brand Assets</FooterLink>
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Join the Community</h3>
            <div className="flex space-x-4">
              <SocialLink href={socialLinks.twitter} icon={FaTwitter} label="Twitter" />
              <SocialLink href={socialLinks.telegram} icon={FaTelegram} label="Telegram" />
              <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
            </div>
            <div className="mt-6 p-4 bg-dark-primary/50 rounded-lg backdrop-blur-sm">
              <h4 className="font-medium mb-2">Contract Address</h4>
              <div className="flex items-center gap-2 group relative">
                <code className="text-sm text-gray-400 break-all font-mono">
                  {contractAddress}
                </code>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  aria-label="Copy contract address"
                >
                  {copied ? (
                    <FaCheck className="w-4 h-4 text-green-500" />
                  ) : (
                    <FaCopy className="w-4 h-4 text-primary group-hover:text-primary-light transition-colors" />
                  )}
                </button>
                {copied && (
                  <div className="absolute right-0 -top-8 bg-green-500/90 text-white px-2 py-1 rounded text-sm backdrop-blur-sm">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LunarLeap AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children, external }) => (
  <li>
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-0.5 transform inline-block"
    >
      {children}
    </a>
  </li>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg bg-dark-accent hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
    aria-label={label}
  >
    <Icon className="w-5 h-5 text-primary group-hover:text-primary-light transition-colors" />
  </a>
);

export default Footer; 