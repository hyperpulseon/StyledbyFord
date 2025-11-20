import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 uppercase text-black dark:text-white">
              The <span className="font-bold">Process</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-normal mb-4 tracking-wide text-black dark:text-white">The Vibe Check</h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed transition-colors">
                  It all starts with a vibe check. We will hop on a quick 30 minute phone consult. My approach begins with understanding who you are, what drives you, and the presence you want to cultivate in the world. From there, we will tailor the experience to your goals, lifestyle, and personal brand.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 h-[500px] bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden group transition-colors"
          >
            {/* Upscale Hotel Lobby / Business Call Vibe */}
            <img
              src="https://images.unsplash.com/photo-1551632436-cbf8dd354ca8?q=80&w=2069&auto=format&fit=crop"
              alt="Consultation Call"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}