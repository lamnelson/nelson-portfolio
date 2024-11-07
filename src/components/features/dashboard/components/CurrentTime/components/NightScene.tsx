"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import { TimeDisplay } from "./TimeDisplay";

export const NightScene = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

		// set canvas dimensions
		const isMobile = window.innerWidth < 768;
		canvas.width = isMobile ? window.innerWidth : window.innerWidth / 3;
		canvas.height = isMobile ? window.innerHeight : window.innerHeight / 3;

		// draw some stars
		for (let i = 0; i < 100; i++) {
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
			ctx.fill();
		}
	}, []);

	return (
		<TimeDisplay bgClassName="bg-[#001324]" timeClassName="text-white">
			<canvas className="absolute inset-0 size-full opacity-70 md:opacity-100" ref={canvasRef} />
			<motion.div
				animate={{ scale: [1, 1.1, 1.1, 1, 1] }}
				className="absolute right-0 bottom-0 rounded-tl-full bg-white/10 pt-2 pl-2 md:pt-4 md:pl-4"
				transition={{
					duration: 4,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
			>
				<motion.div>
					<div className="right-0 bottom-0 rounded-tl-full bg-white/20 pt-2 pl-2 md:pt-4 md:pl-4">
						<div className="right-0 bottom-0 rounded-tl-full bg-white/20 pt-2 pl-2 md:pt-4 md:pl-4">
							<motion.div
								animate={{ scale: [1, 0.9, 0.9, 1, 1] }}
								className="relative size-48 rounded-tl-full bg-[#DFDFDF]"
								initial={false}
								transition={{
									duration: 4,
									ease: "easeInOut",
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
								}}
							/>
							<div className="absolute top-14 left-12 size-2 rounded-full bg-[#C2C2C2] md:top-16 md:left-28 md:size-4 xl:top-20 xl:left-56 xl:size-12" />
							<div className="absolute top-10 left-14 size-4 rounded-full bg-[#C2C2C2] md:top-24 md:left-[115px] xl:top-36 xl:left-[230px] xl:size-8" />
							<div className="absolute top-10 left-10 size-2 rounded-full bg-[#C2C2C2] md:top-20 md:left-20 md:size-8 xl:top-32 xl:left-36 xl:size-16" />
						</div>
					</div>
				</motion.div>
			</motion.div>
		</TimeDisplay>
	);
};
