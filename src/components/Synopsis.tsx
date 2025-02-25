
import { motion } from "framer-motion";

export const Synopsis = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-elevation-3 p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8 text-center">The Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-secondary-600 leading-relaxed mb-6">
              In a shattered future where Earth has become a battleground and Mars is humanity's promised sanctuary, 17-year-old Max finds himself drawn into The Martian Games—a brutal competition held on Earth where survival means more than just a prize.
            </p>
            <p className="text-secondary-600 leading-relaxed mb-6">
              The stakes are life itself. The winners earn wealth, glory, and the ultimate reward: a one-way ticket to Mars, a utopia for the privileged few. The Games are no mere spectacle—they are a deadly test of endurance, wit, and courage, where participants must outsmart lethal machines, navigate hostile terrain, and face off against their fellow competitors.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              For Max, the Games are his only hope of uncovering the secrets behind his father's disappearance, the mysterious cube tied to Mars, and the truth about the world's descent into chaos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
