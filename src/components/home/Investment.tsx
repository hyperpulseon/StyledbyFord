import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingItems = [
  {
    category: "Consultation",
    title: "The Vibe Check",
    price: "Complimentary",
    details: ["30-minute call", "Connect & assess needs", "Align on goals"],
    highlight: false
  },
  {
    category: "Wardrobe Edit",
    title: "Closet Confessions",
    price: "$300",
    subPrice: "for 2 hours (+$75/hr)",
    details: ["Closet reset", "Re-styling", "Digital outfit recap"],
    highlight: false
  },
  {
    category: "Event Styling",
    title: "The Grand Entrance",
    price: "$250",
    subPrice: "per event look",
    details: ["1 styled option", "Show-stopping looks", "Optional on-site support (+$200)"],
    highlight: false
  },
  {
    category: "Shopping",
    title: "The Power Shop",
    price: "$300",
    subPrice: "for 2 hours (+$75/hr)",
    details: ["Guided in-person or virtual", "Pre-pulled selections", "Curated virtual links"],
    highlight: false
  },
  {
    category: "Photo Shoot",
    title: "Pose-Ready",
    price: "$250 – $400",
    subPrice: "depending on scope",
    details: ["Seamless on-camera looks", "Optional on-set support ($100/hr)"],
    highlight: false
  }
];

const elevationPackages = [
  {
    name: "Mini Elevation",
    price: "$200",
    features: ["1.5-hour session", "3 styled outfits", "Digital lookbook recap"]
  },
  {
    name: "Signature Elevation",
    price: "$300",
    features: ["3-hour session", "6–8 styled outfits", "Digital lookbook recap", "Shopping recommendations"],
    highlight: true
  },
  {
    name: "Deluxe Elevation",
    price: "$500",
    features: ["5-hour session", "12+ styled outfits", "Comprehensive digital lookbook", "Personalized shopping list", "Investment piece guide"]
  }
];

const bundles = [
  { name: "The Reset", desc: "Closet Confessions + Power Shop", price: "$500" },
  { name: "The Glow-Up", desc: "3 months of Style Elevation", price: "$500/mo" },
  { name: "The Full Experience", desc: "Closet Confessions + Power Shop + 2 Event Stylings", price: "$1,000" }
];

export default function Investment() {
  return (
    <section id="investment" className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4 text-black dark:text-white">The Investment</h2>
          <p className="text-neutral-500 tracking-widest uppercase text-xs">Invest in your presence</p>
        </motion.div>

        {/* Style Elevation Tiers */}
        <div className="mb-24">
          <h3 className="text-xl font-light uppercase tracking-widest text-center mb-12 border-b border-neutral-200 dark:border-neutral-900 pb-4 inline-block mx-auto w-full text-black dark:text-white">Style Elevation Packages</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {elevationPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 border transition-colors duration-300 ${pkg.highlight ? 'border-black dark:border-white bg-neutral-100 dark:bg-neutral-900/30' : 'border-neutral-200 dark:border-neutral-800 bg-transparent'} flex flex-col`}
              >
                <h4 className="text-lg font-medium uppercase tracking-wide mb-2 text-black dark:text-white">{pkg.name}</h4>
                <div className="text-3xl font-bold mb-8 text-black dark:text-white">{pkg.price}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      <Check className="w-4 h-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`w-full py-3 text-xs font-bold uppercase tracking-widest text-center border transition-all duration-300 ${pkg.highlight ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white' : 'border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white'}`}>
                  Select
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-neutral-500 text-sm mt-6 italic">Monthly Ongoing Styling Support: Pricing Based on Need</p>
        </div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {pricingItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 border border-neutral-200 dark:border-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors duration-300 bg-neutral-50 dark:bg-neutral-950"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 block">{item.category}</span>
              <h4 className="text-xl font-medium uppercase mb-4 text-black dark:text-white">{item.title}</h4>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-black dark:text-white">{item.price}</span>
                {item.subPrice && <span className="text-xs text-neutral-500">{item.subPrice}</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 font-light flex items-center gap-2">
                    <div className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bundles */}
        <div className="bg-neutral-100 dark:bg-neutral-900/20 border border-neutral-200 dark:border-neutral-900 p-8 md:p-12 transition-colors">
          <h3 className="text-xl font-light uppercase tracking-widest text-center mb-10 text-black dark:text-white">Curated Bundles</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-300 dark:divide-neutral-800">
            {bundles.map((bundle) => (
              <div key={bundle.name} className="pt-6 md:pt-0 px-4">
                <h4 className="text-lg font-bold uppercase mb-2 text-black dark:text-white">{bundle.name}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light mb-4 h-10">{bundle.desc}</p>
                <div className="text-xl font-medium text-black dark:text-white">{bundle.price}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}