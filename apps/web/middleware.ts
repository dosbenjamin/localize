import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

const AUTH_ROUTES = ['/login', '/register']
const isAuthRoute = (request: NextRequest) => {
  return AUTH_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route))
}

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient({ req: request, res: response })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session && isAuthRoute(request)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!session && !isAuthRoute(request)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/', '/login', '/register', '/dashboard/:path*'],
}
