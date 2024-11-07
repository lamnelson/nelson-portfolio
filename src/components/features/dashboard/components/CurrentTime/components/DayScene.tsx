import { motion } from "framer-motion";

import { TimeDisplay } from "./TimeDisplay";

export const DayScene = () => {
	return (
		<TimeDisplay bgClassName="bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF]" timeClassName="text-current">
			<motion.div
				animate={{
					scale: [1, 1.1, 1.1, 1, 1],
				}}
				className="absolute right-0 bottom-0 rounded-tl-full bg-white/10 pt-2 pl-2 md:pt-4 md:pl-4"
				transition={{
					duration: 4,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
			>
				<motion.div>
					<div className="right-0 bottom-0 rounded-tl-full bg-white/20 pt-2 pl-2 md:pt-4 md:pl-4">
						<div className="right-0 bottom-0 rounded-tl-full bg-white/20 pt-2 pl-2 md:pt-4 md:pl-4">
							<motion.div
								animate={{ scale: [1, 0.9, 0.9, 1, 1] }}
								className="relative size-48 rounded-tl-full bg-[#FEEA9A]"
								initial={false}
								transition={{
									duration: 4,
									ease: "easeInOut",
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
								}}
							/>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</TimeDisplay>
	);
};
