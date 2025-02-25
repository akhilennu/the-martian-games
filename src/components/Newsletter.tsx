
import { motion } from "framer-motion";
import { Input } from "./ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-space-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-space">Join the Journey to Mars</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to receive updates about The Martian Games and exclusive content from Mahi.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-space-800 border-space-700 text-white placeholder:text-gray-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mars-600 hover:bg-mars-700 text-white px-6 py-2 rounded-md font-space transition-colors duration-200"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
