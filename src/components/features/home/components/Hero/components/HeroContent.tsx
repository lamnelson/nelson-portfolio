import { memo } from "react";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HERO_SECTION_WORDS } from "../Hero.constants";
import { HeroAction } from "./HeroAction";

export const HeroContent = memo(function HeroContent() {
	return (
		<PageHeader>
			<PageHeaderHeading>Nelson Lam</PageHeaderHeading>
			<PageHeaderDescription>
				<TypewriterEffect words={HERO_SECTION_WORDS} />
			</PageHeaderDescription>
			<HeroAction />
		</PageHeader>
	);
});
