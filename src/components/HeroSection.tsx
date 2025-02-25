
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-space-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mars-900/20 via-space-950 to-space-950"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-mars-500 uppercase tracking-wider font-space">From the author of new sci-fi sensation</span>
          <h1 className="text-5xl md:text-7xl font-bold font-space mt-4 mb-6 leading-tight">
            THE MARTIAN GAMES
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Where survival is the ultimate currency and Mars is the only escape
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-mars-600 hover:bg-mars-700 text-white px-8 py-3 rounded-full font-space transition-colors duration-200"
          >
            Read the First Chapter
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
