import { useState, FormEvent, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Loader2, Instagram, Facebook, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    need_description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await base44.sendContactRequest(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', need_description: '' });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-8 text-black dark:text-white">
              Let's <span className="font-bold">Connect</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light text-lg mb-12 max-w-md leading-relaxed">
              Ready to elevate your style? Whether you have questions about the process or are ready to book your consultation, I'm here to help you define your presence.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 group">
                <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center rounded-full group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:henry@styledbyford.com" className="text-sm uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors">
                  henry@styledbyford.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 group">
                <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center rounded-full group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors">
                  @styledbyford
                </a>
              </div>

              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 group">
                <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center rounded-full group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors">
                  Styled by Ford
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-50 dark:bg-neutral-900/30 p-8 md:p-12 border border-neutral-100 dark:border-neutral-800"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium uppercase mb-4 text-black dark:text-white">Message Sent</h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-light">
                  Thank you for reaching out. I will get back to you shortly to schedule your Vibe Check.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-xs uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:opacity-60 transition-opacity text-black dark:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors rounded-none"
                    placeholder="YOUR NAME"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors rounded-none"
                    placeholder="YOUR EMAIL"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors rounded-none"
                    placeholder="YOUR PHONE NUMBER"
                  />
                </div>

                <div>
                  <label htmlFor="need_description" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">How can I help?</label>
                  <textarea
                    id="need_description"
                    name="need_description"
                    value={formData.need_description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none rounded-none"
                    placeholder="TELL ME ABOUT YOUR STYLE GOALS..."
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-xs uppercase tracking-wide">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 uppercase text-xs tracking-[0.2em] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}