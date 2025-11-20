import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Style Elevation",
    subtitle: "Everyday / Professional / Social Styling",
    description: "This is where the magic happens. Whether you’re building a power wardrobe for work, need everyday looks that feel true to your essence, or want to stand out in social settings, I’ll elevate your closet into a curated collection that makes getting dressed the best part of your day. Expect confidence, compliments, and minimal “nothing to wear” moments.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" // Looking at racks
  },
  {
    id: 2,
    title: "Closet Confessions",
    subtitle: "Wardrobe Edit",
    description: "We are shopping your closet, baby! I’ll dig into what you already own, breathe new life into pieces you forgot you loved, and create fresh combinations you didn’t even know were hiding in there. Consider this a reset button for your wardrobe - no unnecessary splurges, just pure potential unlocked. This is when recycling is ACTUALLY FUN!",
    image: "https://images.unsplash.com/photo-1558769132-cb1f164e3275?q=80&w=2070&auto=format&fit=crop" // Clothing Rack
  },
  {
    id: 3,
    title: "The Grand Entrance",
    subtitle: "Event Styling",
    description: "Red carpet, wedding guest, gala, business dinner, or date night - if the moment calls for a statement, I’ll make sure you own the room. Together, we’ll create a head-turning ensemble that matches the vibe, fits the occasion, and still feels authentically you.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" // Shopping luxury
  },
  {
    id: 4,
    title: "Pose-Ready",
    subtitle: "Photo Shoot Styling",
    description: "Every photo tells a story, and the clothes set the tone. Whether it’s for branding, content creation, professional headshots, or just because you deserve a shoot moment, I’ll style you to perfection. From wardrobe pulls to full-on creative direction, I’ll make sure your look translates seamlessly on camera.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" // Directing / Pointing
  },
  {
    id: 5,
    title: "The Power Shop",
    subtitle: "Shopping Experience",
    description: "Let’s hit the racks (or the apps) with purpose. I’ll curate a shopping trip that cuts through the chaos and brings you pieces that work for your body, lifestyle, and goals. No more impulse buys that sit with tags on — only wardrobe investments that speak your style and can actually be worn multiple ways and IN multiple settings.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" // Luxury Store
  }
];

export default function StyleMenu() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="style-menu" className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light tracking-tight mb-16 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-8 text-black dark:text-white"
        >
          The Style <span className="font-bold">Menu</span>
        </motion.h2>

        <div className="space-y-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-neutral-200 dark:border-neutral-900 last:border-0"
            >
              <motion.button
                onViewportEnter={() => {
                  if (!(window as any).__isScrollingToSection) {
                    setActiveService(service.id);
                  }
                }}
                viewport={{ margin: "-10% 0px -20% 0px" }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className="w-full py-8 flex flex-col md:flex-row justify-between items-start md:items-center text-left group"
              >
                <div className="flex-1">
                  <span className="text-xs text-neutral-500 tracking-[0.2em] mb-2 block">0{service.id}</span>
                  <h3 className={`text-2xl md:text-4xl uppercase transition-all duration-300 ${activeService === service.id ? 'font-bold text-black dark:text-white' : 'font-light text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white'}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2 tracking-wider uppercase">{service.subtitle}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  {activeService === service.id ?
                    <Minus className="w-6 h-6 text-black dark:text-white" /> :
                    <Plus className="w-6 h-6 text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  }
                </div>
              </motion.button>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 gap-12 pb-12 pt-4">
                      <div className="prose max-w-none">
                        <p className="text-neutral-600 dark:text-neutral-300 font-light leading-relaxed text-lg">
                          {service.description}
                        </p>
                        <div className="mt-8">
                          <a href="#contact" className="inline-block border border-black dark:border-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 text-black dark:text-white">
                            Inquire Now
                          </a>
                        </div>
                      </div>
                      <div className="h-64 md:h-80 w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}