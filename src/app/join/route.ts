import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.redirect("https://chat.whatsapp.com/BwpdkIJFgkrBOJc7j92CPo", { status: 302 });
}
