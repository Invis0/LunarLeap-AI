import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaRobot, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const DemoPreview = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setIsTyping(true);
    // Simulate API response
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
    setMessage('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto mt-12"
    >
      <div className="bg-dark-secondary/50 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaRobot className="text-primary w-5 h-5" />
            <span className="font-medium">AI Assistant</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Chat area */}
        <div className="h-[300px] overflow-y-auto p-4 space-y-4">
          <Message type="bot" text="Hello! How can I assist you today?" />
          <Message type="user" text="Can you help me understand the tokenomics?" />
          <Message 
            type="bot" 
            text="Of course! LunarLeap features a deflationary model with automatic burns and reflection rewards. Would you like me to explain more about how it works?" 
          />
          {isTyping && <TypingIndicator />}
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-dark-accent/50 rounded-lg px-4 py-2 outline-none focus:ring-2 ring-primary/50 transition-all"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark transition-colors rounded-lg px-4 py-2"
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const Message = ({ type, text }) => (
  <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[80%] rounded-lg px-4 py-2 ${
        type === 'user'
          ? 'bg-primary text-white'
          : 'bg-dark-accent/50 text-white/90'
      }`}
    >
      {text}
    </div>
  </div>
);

const TypingIndicator = () => (
  <div className="flex items-center gap-2 text-primary">
    <FaSpinner className="animate-spin" />
    <span className="text-sm">AI is typing...</span>
  </div>
);

export default DemoPreview;