
import { motion } from "framer-motion";
import { Input } from "./ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center bg-primary-50 rounded-3xl shadow-elevation-2 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">Join the Journey to Mars</h2>
          <p className="text-secondary-600 mb-8">
            Subscribe to receive updates about The Martian Games and exclusive content from Mahi.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white border-secondary-200 text-secondary-900 placeholder:text-secondary-400 rounded-full"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full shadow-elevation-1 transition-colors duration-200"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
