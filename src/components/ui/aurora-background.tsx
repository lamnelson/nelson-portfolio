"use client";

import type React from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
}

export const AuroraBackground = ({
	children,
	className,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<div className={cn("relative flex flex-col items-center justify-center transition-bg", className)} {...props}>
			<div className="absolute inset-0 overflow-hidden">
				<div
					className={cn(
						`-inset-[10px] pointer-events-none absolute opacity-50 blur-[10px] invert filter will-change-transform 
        [--aurora:repeating-linear-gradient(100deg,var(--white)_1%,var(--green-300)_75%,var(--white)_20%,var(--green-400)_25%,var(--white)_30%)] 
        [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] 
        [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] 
        [background-image:var(--white-gradient),var(--aurora)] 
        [background-position:50%_50%,50%_50%] 
        [background-size:250%,_150%] 
        after:absolute after:inset-0 after:animate-aurora after:mix-blend-difference after:content-[""] 
        dark:invert-0 after:[background-attachment:fixed] 
        after:[background-image:var(--white-gradient),var(--aurora)] 
        after:[background-size:200%,_50%] 
        dark:[background-image:var(--dark-gradient),var(--aurora)] 
        after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

		

						showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]",
					)}
				/>
			</div>
			{children}
		</div>
	);
};
