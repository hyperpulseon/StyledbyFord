"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string
  imageClassName?: string
  parallaxAmount?: number // Percentage of height to move
}

export function ParallaxImage({
  containerClassName,
  imageClassName,
  parallaxAmount = 15,
  alt,
  ...props
}: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxAmount}%`, `${parallaxAmount}%`])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div style={{ y, scale }} className="absolute inset-[-10%] h-[120%] w-full">
        <Image className={cn("h-full w-full object-cover", imageClassName)} alt={alt} {...props} />
      </motion.div>
    </div>
  )
}
