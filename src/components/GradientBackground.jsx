import { motion } from 'framer-motion';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark base with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      
      {/* Subtle blue gradient sphere */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(79,70,229,0.08) 0%, rgba(129,140,248,0.08) 25%, transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating accent elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[800px] h-[800px]"
            style={{
              background: `radial-gradient(circle at center, ${i % 2 === 0 ? 'rgba(79,70,229,0.05)' : 'rgba(129,140,248,0.05)'} 0%, transparent 70%)`,
              filter: 'blur(100px)',
              left: `${20 + i * 25}%`,
              top: `${10 + i * 30}%`,
            }}
            animate={{
              y: ['0%', '50%', '0%'],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Subtle mesh gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(79,70,229,0.08) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(129,140,248,0.08) 0px, transparent 50%),
            radial-gradient(at 40% 70%, rgba(79,70,229,0.08) 0px, transparent 50%),
            radial-gradient(at 70% 60%, rgba(129,140,248,0.08) 0px, transparent 50%)
          `,
          opacity: 0.7,
        }}
      />

      {/* Subtle animated lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${90 * i}deg, transparent 0%, rgba(79,70,229,0.05) 50%, transparent 100%)`,
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 200%'],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-primary-light/5 rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Very subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </div>
  );
};

export default GradientBackground; 