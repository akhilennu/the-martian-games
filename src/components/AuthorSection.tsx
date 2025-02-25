
import { motion } from "framer-motion";

export const AuthorSection = () => {
  return (
    <section className="py-20 bg-space-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/3">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-mars-500/20">
              {/* Author image placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-mars-600/20 to-mars-900/20"></div>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <span className="text-mars-500 uppercase tracking-wider font-space">About the Author</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6 font-space">Mahi</h2>
            <p className="text-gray-300 leading-relaxed">
              Mahi is an emerging voice in science fiction, known for crafting intricate narratives that blend technological innovation with human emotion. With a background in both technology and creative writing, Mahi brings a unique perspective to the genre, creating stories that resonate with readers across generations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
