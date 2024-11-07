import Image from "next/image";
import { memo } from "react";

import { siteConfig } from "@/config/site";

export const HeroImage = memo(function HeroImage() {
	return (
		<Image
			alt="Picture of the author"
			className="m-auto mb-8 h-auto max-h-[1000px] rounded-xl w-full max-w-md justify-center object-cover object-center lg:m-auto lg:max-w-xl"
			draggable={false}
			height={1000}
			priority
			src={siteConfig.assets.avatar}
			width={1200}
			onDragStart={(e) => e.preventDefault()}
		/>
	);
});
