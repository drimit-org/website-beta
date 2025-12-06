import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.redirect("https://drimit.io/https://www.instagram.com/drimit.io", { status: 302 });
}
