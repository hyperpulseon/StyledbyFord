import { FadeIn } from "./ui/fade-in"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Begin Your Transformation</h2>
          <p className="text-muted-foreground font-light">Send an inquiry to book your Vibe Check.</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                Describe Your Need
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your style goals..."
              />
            </div>

            <div className="pt-8 text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
