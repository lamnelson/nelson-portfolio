import { Raleway } from "next/font/google";
import type { PropsWithChildren } from "react";

import { SiteFooter, SiteHeader } from "@/components/common/navigation";
import { RootLayoutProvider } from "../providers";

const raleway = Raleway({
	subsets: ["latin"],
	variable: "--heading-font",
});

interface BaseLayoutProps extends PropsWithChildren {
	className?: string;
}

export function BaseLayout({ children, className }: BaseLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={raleway.variable}>
				<RootLayoutProvider>
					<SiteHeader />
					<main className={`relative flex min-h-screen flex-col ${className}`}>
						<div className="flex-1 overflow-hidden">{children}</div>
					</main>
					<SiteFooter />
				</RootLayoutProvider>
			</body>
		</html>
	);
}
