import Link from "next/link";

import { cn } from "@/lib/utils";
import { MAIN_NAV_CONFIG } from "./navigation.constants";

export function MainNav() {
    return (
        <nav className="flex items-center gap-4">
            {MAIN_NAV_CONFIG.map(({ href, title }) => (
                <Link 
                    className={cn("transition-colors hover:text-foreground/80 text-sm")} 
                    href={href} 
                    key={href}
                >
                    {title}
                </Link>
            ))}
        </nav>
    );
}