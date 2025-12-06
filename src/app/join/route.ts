import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.redirect("https://drimit.io/whatsapp-join", { status: 302 });
}
