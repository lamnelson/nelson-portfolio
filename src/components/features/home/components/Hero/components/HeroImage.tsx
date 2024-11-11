import Image from "next/image";
import { memo } from "react";

import { siteConfig } from "@/config/site";

export const HeroImage = memo(function HeroImage() {
	return (
		<Image
			alt="Picture of the author"
			className="m-auto mb-8 h-auto max-h-[800px] rounded-xl w-full max-w-[200px] max-w-md justify-center object-cover object-center lg:m-auto lg:max-w-xl"
			draggable={false}
			height={800}
			priority
			src={siteConfig.assets.avatar}
			width={600}
			onDragStart={(e) => e.preventDefault()}
		/>
	);
});
