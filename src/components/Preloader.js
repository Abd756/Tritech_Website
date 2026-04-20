import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);

    // Smooth progress to reach 100% in ~2 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const jump = Math.random() * 5 + 2; // Average ~4.5% every 100ms matches 2.2s
        return Math.min(100, prev + jump);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          {/* Background Ambient Light - TRI TECH Red Tint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Text Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-center flex flex-col items-center"
            >
              <div className="relative mb-6">
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                  TRI-TECH
                </h1>
                {/* Brand Stripes under text */}
                <div className="flex flex-col gap-1 mt-2 w-full">
                  <div className="h-1.5 w-full bg-[#c0392b] rounded-full"></div>
                  <div className="h-1.5 w-full bg-[#f1c40f] rounded-full"></div>
                  <div className="h-1.5 w-full bg-[#2856a3] rounded-full"></div>
                </div>
              </div>

              {/* Tagline with handwritten font */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                style={{ fontFamily: "'Caveat', cursive" }}
                className="text-white text-2xl md:text-4xl tracking-wide mt-2"
              >
                with might and main
              </motion.p>
            </motion.div>

            {/* Progress Container - TRI TECH Themed Gradient */}
            <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-yellow to-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "linear" }}
              />
            </div>

            <motion.div
              className="mt-6 font-mono text-[10px] text-white/40 uppercase tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Initializing Systems • {Math.min(100, Math.floor(progress))}%
            </motion.div>
          </div>

          {/* Decorative Corner Lines - TRI TECH Colors */}
          <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-primary/20" />
          <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-yellow/20" />
          <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-accent/20" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-white/5" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
