import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "./ThemeProvider";

export function RootLayoutProvider({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
			{children}
			<Analytics />
			<SpeedInsights />
		</ThemeProvider>
	);
}
