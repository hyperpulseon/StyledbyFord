import { cn } from "@/lib/utils"

export function CornerCross({ className }: { className?: string }) {
  return (
    <div className={cn("absolute w-3 h-3 pointer-events-none z-30", className)}>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/40" />
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/40" />
    </div>
  )
}

export function DecorativeLine({ className, vertical = false }: { className?: string; vertical?: boolean }) {
  return (
    <div
      className={cn(
        "absolute bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20",
        vertical ? "w-[1px] h-full bg-gradient-to-b" : "h-[1px] w-full",
        className,
      )}
    />
  )
}
