import Link from "next/link";

import { MainNav, MobileNav } from "@/components/common/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ModeToggleButton } from "@/components/ui/mode-toggle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container relative flex h-16 max-w-screen-2xl items-center justify-between">
                
                <div className="flex">
                    <Link href="/">
                        <span className="font-bold font-heading text-xl">{siteConfig.siteTitle}</span>
                    </Link>
                </div>

                {/*absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2*/}
                
                <div className="flex items-center gap-4">
                    <nav className="hidden items-center gap-6 text-sm md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <MainNav />
                    </nav>
                    <div className="flex items-center gap-2 w-auto">
                        <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
                            <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}>
                                <Icons.gitHub className="size-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link href={siteConfig.links.linkedin} rel="noreferrer" target="_blank">
                            <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}>
                                <Icons.linkedIn className="size-4 fill-current" />
                                <span className="sr-only">LinkedIn</span>
                            </div>
                        </Link>
                        <ModeToggleButton className="w-9 px-0" />
                    </div>
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}