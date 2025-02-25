
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-surface-background text-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-surface-background"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-primary-600 uppercase tracking-wider font-medium">From the author of new sci-fi sensation</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight text-secondary-900">
            THE MARTIAN GAMES
          </h1>
          <p className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Where survival is the ultimate currency and Mars is the only escape
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full shadow-elevation-2 transition-all duration-200"
          >
            Read the First Chapter
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
