import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.redirect("https://drimit.io/instagram", { status: 302 });
}
