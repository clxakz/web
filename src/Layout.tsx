import GlassSurface from "./components/GlassSurface";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import BlurText from "./components/BlurText";
import ShinyText from "./components/ShinyText";
import useIsMobile from "./hooks/useIsMobile";
import { motion } from "motion/react";
// import Dither from "./components/Dither";
// import Silk from "./components/Silk";
import DarkVeil from "./components/DarkVeil";

export default function Layout() {
	const isMobile = useIsMobile();

	const MainSurfaceSize: { width: number; height: number } = {
		width: isMobile ? 350 : 500,
		height: 600,
	};

	type Link = {
		title: string;
		image: string;
		url: string;
	};

	const Links: Link[] = [
		{
			title: "SoundCloud",
			image: "/soundcloud.svg",
			url: "https://soundcloud.com/clxakz",
		},
		{
			title: "GitHub",
			image: "/github.svg",
			url: "https://github.com/clxakz",
		},
		{
			title: "Instagram",
			image: "/instagram.svg",
			url: "https://www.instagram.com/clxakz.movie/",
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0.0 }}
			animate={{ opacity: 1.0 }}
			transition={{ type: "tween", duration: 1.0, delay: 0.5 }}
			className="h-screen relative select-none"
		>
			{/* <Dither
				waveColor={[0.5, 0.5, 0.5]}
				disableAnimation={false}
				enableMouseInteraction={true}
				mouseRadius={0.3}
				colorNum={4}
				waveAmplitude={0.3}
				waveFrequency={3}
				waveSpeed={0.05}
			/> */}

			{/* <Silk speed={5} scale={1} color="#ffffff" noiseIntensity={1.5} rotation={0} /> */}

			<DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} scanlineFrequency={0} warpAmount={0} resolutionScale={1} />

			<motion.main
				initial={{ scale: 0.5 }}
				animate={{ scale: 1.0 }}
				transition={{ delay: 0.5, type: "spring", stiffness: 50, damping: 8 }}
				className="absolute inset-0 flex items-center justify-center pointer-events-none"
			>
				<GlassSurface width={MainSurfaceSize.width} height={MainSurfaceSize.height} className="pointer-events-auto">
					<div className="flex flex-col h-full w-full gap-2 p-4">
						<section className="flex justify-between w-full h-fit">
							<motion.div
								initial={{ opacity: 0, scale: 0.0, y: 50 }}
								animate={{ opacity: 1, scale: 1.0, y: 0 }}
								transition={{ delay: 0.6, type: "spring", damping: 8, stiffness: 50 }}
							>
								<Avatar className="size-20">
									<AvatarImage src="/pfp.png" />
									<AvatarFallback>CA</AvatarFallback>
								</Avatar>
							</motion.div>

							<article className="flex flex-col items-end justify-center">
								<BlurText
									text="clxakz"
									delay={150}
									animateBy="letters"
									direction="top"
									className="text-3xl font-semibold text-white leading-3"
								/>

								<motion.div
									initial={{ opacity: 0, filter: "blur(5px)" }}
									animate={{ opacity: 1, filter: "blur(0px)" }}
									transition={{ delay: 0.5, type: "tween", duration: 1 }}
								>
									<ShinyText
										className="text-lg"
										text="software engineer"
										speed={2}
										delay={0}
										color="#b5b5b5"
										shineColor="#ffffff"
										spread={120}
										direction="left"
										yoyo={false}
										pauseOnHover={false}
									/>
								</motion.div>
							</article>
						</section>

						<motion.section
							initial={{ scale: 0.0, y: 60, filter: "blur(5px)" }}
							animate={{ scale: 1.0, y: 0, filter: "blur(0px)" }}
							transition={{ delay: 1.1, type: "spring", stiffness: 50, damping: 9 }}
							className="flex flex-col mt-auto"
						>
							<ShinyText
								className="text-lg"
								text="latest release"
								speed={2}
								delay={0}
								color="#b5b5b5"
								shineColor="#ffffff"
								spread={120}
								direction="left"
								yoyo={false}
								pauseOnHover={false}
							/>

							<iframe
								className="rounded-md outline-none"
								width="100%"
								height="130"
								allow="autoplay"
								src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
									"https://soundcloud.com/clxakz/semper-fi"
								)}&visual=true`}
							></iframe>
						</motion.section>

						<section className="flex flex-col-reverse gap-2">
							{Links.map((link, index) => (
								<motion.div
									key={index}
									initial={{ scale: 0.0, y: 60 }}
									animate={{ scale: 1.0, y: 0 }}
									transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 50, damping: 9 }}
								>
									<GlassSurface width={isMobile ? 300 : 450} height={80}>
										<a href={link.url} target="_blank" className="flex items-center w-full h-full px-4 gap-4 invert">
											<img src={link.image} className="size-8" />
											<h1 className="text-lg font-bold">{link.title}</h1>
										</a>
									</GlassSurface>
								</motion.div>
							))}
						</section>
					</div>
				</GlassSurface>
			</motion.main>
		</motion.div>
	);
}
