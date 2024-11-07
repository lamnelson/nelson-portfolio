import { AuroraBackground } from "@/components/ui/aurora-background";
import { Separator } from "@/components/ui/separator";
import { About, Journey, Hero, Project } from "./components";

export const HomePage = () => {
    return (
        <>
            <AuroraBackground>
                <Hero />
                
                <div className="container container-bub relative">
                    <Separator />
                    <About />
                    <Separator />
                    <Journey />
                    <Separator />
                    <Project />
                </div>
            </AuroraBackground>
        </>
    );
};