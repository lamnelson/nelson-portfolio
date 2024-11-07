import { CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function About() {
	return (
		<section className="container space-y-4">
			<h2 className="text-3xl lg:text-4xl">About Me</h2>
			<Reveal
				transition={{ duration: 0.4 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<CardDescription className="space-y-4 text-foreground">
					<p>Hi 👋 I&apos;m a software engineer, gamer, climber, and avid foodie based in Dallas, Texas.</p>
					<p>
						As a first-generation Vietnamese-American, I&apos;m deeply committed to paving the way forward in tech and making a meaningful impact through my work and projects. My journey has been fueled by the drive to excel and honor the legacy of resilience in my family—a principle I live by daily.
					</p>
					<blockquote className="mb-4 border-l-2 pl-6 italic">
						&quot;<span className="text-primary">Lấy chí nhân mà thay cường bạo</span>&quot; - Nguyễn Trãi (1380&ndash;1442)
					</blockquote>
					<p>
						"Use benevolence to overcome cruelty."
					</p>
					<p>
						This saying reminds me to embody kindness, integrity, and strength in my work—especially in the face of challenges—and serves as a guiding principle to continuously improve through empathy and self-reflection.
					</p>
					<p>
						Driven by a love for creating and problem-solving, I&apos;m motivated to build tools and solutions that make a difference. Whether working on AI solutions or contributing to open-source projects, I aim to grow and give back to the community that has supported me along the way.
					</p>
				</CardDescription>
			</Reveal>
		</section>
	);
}
