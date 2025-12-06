import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Drimit",
	description: "El Gremio Digital para Artistas Independientes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
