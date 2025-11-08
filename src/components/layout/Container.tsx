"use client"

import React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn("max-w-6xl mx-auto px-4 md:px-8", className)}
            {...props}
        >
            {children}
        </div>
    )
}
