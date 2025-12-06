import Link from "next/link";

export default function Home() {
	return (
		<main style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			<h1>Bienvenidos a Drimit</h1>
			<p>El Gremio Digital para Artistas Independientes</p>
			<Link href="/intro">
				<button>Descubre más sobre Drimit</button>
			</Link>
			<Link href="/join">
				<button>Únete a la Comunidad</button>
			</Link>
		</main>
	);
}
