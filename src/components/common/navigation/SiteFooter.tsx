import { siteConfig } from "@/config/site";

export function SiteFooter() {
	return (
		<footer className="border-border/40 border-t py-6 md:py-0">
			<div className="container flex max-w-screen-2xl flex-col items-center justify-between md:h-14 md:flex-row">
				<div className="text-balance text-center text-muted text-sm leading-loose md:text-left">
					Built by{" "}
					<a
						className="font-medium underline underline-offset-4"
						href={siteConfig.links.linkedin}
						rel="noreferrer"
						target="_blank"
					>
						lamnelson
					</a>
					. The source code is available on{" "}
					<a
						className="font-medium underline underline-offset-4"
						//href={siteConfig.links.githubRepo}
						rel="noreferrer"
						target="_blank"
					>
						GitHub
					</a>
					.
				</div>
			</div>
		</footer>
	);
}
