import Link from "next/link";

export default function Home() {
	return (
		<main style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			<h1>Bienvenidos a Drimit</h1>
			<p>El Gremio Digital para Artistas Independientes</p>
			{/* CTA 1: Introducción a Drimit */}
			<Link href="/intro">
				<button>Introducción a Drimit</button>
			</Link>

			{/* CTA 2: Únete a la Comunidad */}
			<Link href="/join">
				<button>Únete a la Comunidad</button>
			</Link>
		</main>
	);
}
