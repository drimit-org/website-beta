import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6 py-8 sm:py-0">
			{/* Animated background elements - optimized for mobile */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
			</div>

			{/* Content */}
			<div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-2xl">
				{/* Main Heading */}
				<div className="space-y-3 sm:space-y-4">
					<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight sm:leading-normal">
						Drimit
					</h1>
					<p className="text-base sm:text-xl md:text-2xl text-slate-400">
						El Gremio Digital para Artistas Independientes
					</p>
				</div>

				{/* Subtitle */}
				<p className="text-sm sm:text-lg md:text-xl text-slate-500 leading-relaxed px-2 sm:px-0">
					Conecta, colabora y crece en nuestra red de artistas independientes.
				</p>

				{/* CTA Buttons - mobile optimized */}
				<div className="flex flex-col gap-3 sm:gap-4 justify-center pt-3 sm:pt-4">
					<Link href="/join" className="group w-full sm:w-auto">
						<button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold transition-all active:scale-95 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 touch-manipulation">
							Únete Ahora
						</button>
					</Link>
					<Link href="/intro" className="group w-full sm:w-auto">
						<button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 rounded-lg border border-slate-400/30 text-slate-300 font-semibold hover:bg-slate-800/50 hover:border-slate-300/50 transition-all active:scale-95 hover:-translate-y-0.5 touch-manipulation">
							Más Información
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
