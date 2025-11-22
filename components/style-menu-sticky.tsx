"use client"

import { FadeIn } from "./ui/fade-in"
import { ParallaxImage } from "./ui/parallax-image"

const services = [
    {
        title: "Style Elevation",
        subtitle: "Everyday / Professional / Social Styling",
        description:
            "A complete reimagining of your personal aesthetic. Whether for the boardroom or the social scene, we define a look that commands respect and exudes confidence.",
        image: "/luxury-wardrobe-rack-suits.jpg",
    },
    {
        title: "Closet Confessions",
        subtitle: "Wardrobe Edit",
        description:
            "We dive deep into your current collection. Keeping what works, tailoring what could, and removing what doesn't serve your new direction.",
        image: "/man-looking-at-clothes-in-closet.jpg",
    },
    {
        title: "The Grand Entrance",
        subtitle: "Event Styling",
        description:
            "For those moments that matter. Red carpets, galas, or high-stakes meetings. We ensure you arrive looking impeccable.",
        image: "/tuxedo-luxury-event-styling.jpg",
    },
    {
        title: "Pose-Ready",
        subtitle: "Photo Shoot Styling",
        description:
            "Editorial-grade styling for your personal brand photography. We manage every detail to ensure the camera captures your best angle.",
        image: "/fashion-photoshoot-styling-behind-scenes.jpg",
    },
    {
        title: "The Power Shop",
        subtitle: "Shopping Experience",
        description:
            "An exclusive guided shopping experience at premier luxury destinations. Efficient, targeted, and transformative.",
        image: "/luxury-department-store-shopping.jpg",
    },
]

export function StyleMenuSticky() {
    return (
        <section id="style-menu" className="bg-black">
            <div className="container mx-auto px-6 py-24 md:py-32">
                <FadeIn className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4">The Style Menu</h2>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">Curated Services</p>
                </FadeIn>
            </div>

            {services.map((service, index) => (
                <div key={index} className="h-screen sticky top-0 flex items-center justify-center bg-black">
                    <div className="container mx-auto px-6">
                        <FadeIn className="group">
                            <div
                                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
                            >
                                <ParallaxImage
                                    src={service.image || "/placeholder.svg"}
                                    alt={service.title}
                                    fill
                                    containerClassName="w-full md:w-1/2 aspect-[4/5]"
                                    imageClassName="grayscale transition-all duration-700 group-hover:grayscale-0"
                                    parallaxAmount={10}
                                />

                                <div className="w-full md:w-1/2 space-y-6">
                                    <h3 className="text-3xl md:text-5xl font-serif">{service.title}</h3>
                                    <p className="text-sm uppercase tracking-widest text-gray-400 border-l-2 border-white/20 pl-4">
                                        {service.subtitle}
                                    </p>
                                    <p className="text-gray-300 font-light leading-relaxed text-lg max-w-md">{service.description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            ))}
        </section>
    )
}
