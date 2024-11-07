import Link from "next/link";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { PageActions } from "@/components/ui/page-header";
import { siteConfig } from "@/config/site";

export const HeroAction = memo(function HeroActions() {
	return (
		<PageActions>
			<Button asChild>
				<a download href={siteConfig.assets.resume}>
					Download Resume
				</a>
			</Button>
			<Button variant="linkedin" asChild className="border-[#0A66C2] text-[#0A66C2] hover:text-[#0A66C2]">
			<Link 
				href={siteConfig.links.linkedin} 
				rel="noreferrer" 
				target="_blank" 
				className="flex items-center text-[#0A66C2] fill-[#0A66C2]"
			>
				<Icons.linkedIn className="mr-2 size-4 text-[#0A66C2] fill-[#0A66C2]" />
				LinkedIn
			</Link>
			</Button>
		</PageActions>
	);
});
