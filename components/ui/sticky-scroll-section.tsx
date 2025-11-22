"use client"

import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StickySectionProps {
    children: ReactNode
    className?: string
    stickyClassName?: string
}

export function StickySection({
    children,
    className,
    stickyClassName,
}: StickySectionProps) {
    return (
        <section className={cn("relative h-screen", className)}>
            <div
                className={cn(
                    "sticky top-0 flex h-screen items-center justify-center",
                    stickyClassName
                )}
            >
                {children}
            </div>
        </section>
    )
}

interface StickyScrollContainerProps {
    children: ReactNode
    className?: string
}

export function StickyScrollContainer({
    children,
    className,
}: StickyScrollContainerProps) {
    return <div className={cn("w-full", className)}>{children}</div>
}
