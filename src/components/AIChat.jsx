import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaUser, FaSpinner } from 'react-icons/fa';

const OPENAI_API_KEY = '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';

const INITIAL_MESSAGES = [
  { role: 'assistant', content: 'Hello! I\'m your AI trading assistant. I can help you with market analysis, trading strategies, and answer any questions about LunarLeap AI. What would you like to know?' }
];

const SYSTEM_PROMPT = {
  role: 'system',
  content: `You are an AI assistant for LunarLeap AI, a next-generation AI-powered trading platform. You help users with:
- Trading strategies and market analysis
- Understanding LunarLeap AI features and tools
- Technical analysis and market insights
- General cryptocurrency and trading questions

Keep responses concise, informative, and focused on trading/crypto. If asked about specific prices or financial advice, remind users that you cannot provide investment advice.`
};

const AIChat = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [SYSTEM_PROMPT, ...messages, userMessage],
          max_tokens: 150,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setMessages((prev) => [...prev, data.choices[0].message]);
      } else {
        throw new Error('Invalid API response');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'I apologize, but I encountered an error. Please try again or contact support if the issue persists.' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tools" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            AI Assistant
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold">
            Chat with Our{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              AI Assistant
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Get instant answers to your crypto and trading questions from our advanced AI assistant.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-secondary/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Chat messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-black'
                        : 'bg-dark-accent'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <FaUser className="w-5 h-5" />
                    ) : (
                      <FaRobot className="w-5 h-5" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-primary text-black'
                        : 'bg-dark-accent'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-dark-accent">
                    <FaRobot className="w-5 h-5" />
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-dark-accent">
                    <FaSpinner className="w-5 h-5 animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about trading strategies, market analysis, or LunarLeap features..."
                  className="flex-1 bg-dark-accent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ring-primary/50"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary-light text-black px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  {isLoading ? (
                    <FaSpinner className="w-5 h-5 animate-spin" />
                  ) : (
                    <FaPaperPlane className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Feature highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              title="24/7 Availability"
              description="Get instant responses anytime, anywhere"
            />
            <FeatureCard
              title="Market Insights"
              description="Access real-time trading and market analysis"
            />
            <FeatureCard
              title="Learning Resources"
              description="Educational content to improve your trading"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-dark-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-white/5"
  >
    <h3 className="font-bold mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </motion.div>
);

export default AIChat; 