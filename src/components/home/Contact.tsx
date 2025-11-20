import React, { useState } from 'react';
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
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await base44.entities.ContactRequest.create({
        ...formData,
        status: 'new'
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', need_description: '' });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-8 text-black dark:text-white">Get In Touch</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light mb-12 leading-relaxed">
              Ready to define your presence? Fill out the form or reach out directly. Let's create something impossible to overlook.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Email</h4>
                <a href="mailto:style@styledbyford.com" className="text-xl text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">style@styledbyford.com</a>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Socials</h4>
                <div className="flex gap-6">
                  <a href="#" className="text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"><Instagram className="w-6 h-6" /></a>
                  <a href="#" className="text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"><Facebook className="w-6 h-6" /></a>
                  <a href="#" className="text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"><Mail className="w-6 h-6" /></a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-black p-8 border border-neutral-200 dark:border-neutral-900 transition-colors"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center mb-6 text-black dark:text-white">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light uppercase mb-4 text-black dark:text-white">Message Sent</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Thank you for reaching out. I will be in touch with you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 text-xs uppercase tracking-[0.2em] border-b border-black dark:border-white pb-1 hover:text-neutral-500 dark:hover:text-neutral-400 hover:border-neutral-500 dark:hover:border-neutral-400 text-black dark:text-white">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Describe Your Need</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.need_description}
                    onChange={(e) => setFormData({...formData, need_description: e.target.value})}
                    className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-[0.2em] py-4 text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Inquiry"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Check(props) {
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