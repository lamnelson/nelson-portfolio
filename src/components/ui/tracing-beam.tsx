"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface TracingBeamProps {
	children: React.ReactNode;
	className?: string;
}

export const TracingBeam = ({ children, className }: TracingBeamProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [svgHeight, setSvgHeight] = useState(0);

	const { scrollYProgress } = useScroll({
		offset: ["start start", "end start"],
		target: ref,
	});

	const [, setVelocity] = React.useState(0);

	const initialDotStyle = {
		backgroundColor: "hsl(var(--background))",
		borderColor: "hsl(var(--border))",
	};

	const targetDotStyle = {
		backgroundColor: "hsl(var(--primary))",
		borderColor: "hsl(var(--primary))",
	};

	useEffect(() => {
		const handleResize = () => {
			if (contentRef.current) {
				const newHeight = contentRef.current.offsetHeight;
				const minHeight = 0;
				const maxHeight = 2300;
				const constrainedHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));
				setSvgHeight(constrainedHeight);
			}
		};
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		return scrollYProgress.on("change", setVelocity);
	}, [scrollYProgress]);

	const y1 = useSpring(useTransform(scrollYProgress, [0, 0.7], [50, svgHeight]), {
		damping: 90,
		stiffness: 400,
	});

	const y2 = useSpring(useTransform(scrollYProgress, [0, 0.4], [50, svgHeight]), {
		damping: 90,
		stiffness: 400,
	});

	return (
		<motion.div ref={ref} className={cn("relative mx-auto h-full w-full max-w-4xl", className)}>
			<div className="-left-4 md:-left-20 absolute top-6 hidden md:inline-block">
				<motion.div
					animate={{
						boxShadow: scrollYProgress.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
					}}
					className="ml-[27px] flex size-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm"
					transition={{ delay: 0.5, duration: 0.2 }}
				>
					<motion.div
						initial={initialDotStyle}
						animate={targetDotStyle}
						className="size-2.5 rounded-full border border-neutral-300"
						transition={{ delay: 0.5, duration: 0.2, ease: "easeInOut" }}
					/>
				</motion.div>
				<svg aria-hidden="true" className="ml-4 block rounded-full" height={svgHeight} viewBox={`0 0 20 ${svgHeight}`} width="20">
					<motion.path
						d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
						fill="none"
						stroke="#9091A0"
						strokeOpacity="0.16"
						transition={{
							duration: 10,
						}}
					/>
					<motion.path
						className="motion-reduce:hidden rounded-full"
						d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
						fill="none"
						stroke="url(#gradient)"
						strokeWidth="2.25"
						transition={{
							duration: 10,
						}}
					/>
					<defs>
						<motion.linearGradient gradientUnits="userSpaceOnUse" id="gradient" x1="0" x2="0" y1={y1} y2={y2}>
							<stop stopColor="hsl(var(--primary))" stopOpacity="0" />
							<stop stopColor="hsl(var(--primary))" />
							<stop offset="0.325" stopColor="hsl(var(--primary))" />
							<stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
						</motion.linearGradient>
					</defs>
				</svg>
			</div>
			<div ref={contentRef}>{children}</div>
		</motion.div>
	);
};
