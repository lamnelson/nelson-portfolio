"use client";

import { memo } from "react";

import { cn } from "@/lib/utils";
import { HeroContent } from "./components/HeroContent";
import { HeroImage } from "./components/HeroImage";

export const Hero = memo(function HeroSection() {
	return (
		<section className={cn("container relative py-0")}>
			<div className={cn("grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2")}>
				<HeroImage />
				<HeroContent />
			</div>
		</section>
	);
});
