import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MiddlewareConfig, NextRequest, NextResponse  } from "next/server"

const publicRoutes = [""]

export async function middleware(req: NextRequest, res: NextResponse, next: () => any) {
       
}