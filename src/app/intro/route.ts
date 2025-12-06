import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.redirect("https://www.instagram.com/drimit.io", { status: 302 });
}
