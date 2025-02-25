
import { motion } from "framer-motion";

export const AuthorSection = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-elevation-2 p-8 md:p-12"
        >
          <div className="md:w-1/3">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-primary-100 shadow-elevation-2">
              <img 
                src="/lovable-uploads/de69441a-cd47-4965-84a7-c5bd30bf156c.png"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <span className="text-primary-600 uppercase tracking-wider font-medium">About the Author</span>
            <h2 className="text-3xl font-bold text-secondary-900 mt-2 mb-6">Mahi</h2>
            <p className="text-secondary-600 leading-relaxed">
              Mahi is an emerging voice in science fiction, known for crafting intricate narratives that blend technological innovation with human emotion. With a background in both technology and creative writing, Mahi brings a unique perspective to the genre, creating stories that resonate with readers across generations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
