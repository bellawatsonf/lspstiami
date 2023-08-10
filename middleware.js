import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookie.get("loggedin");
  let url = req.url;

  if (verify && url.includes("/admin/Asesi")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  if (verify && url === "http://localhost:3000/login") {
    return NextResponse.redirect("http://localhost:3000/admin/Asesi");
  }
}
