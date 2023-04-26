import type { NextRequest } from 'next/server'

const AUTH_ROUTES = ['/login', '/register']
export const isAuthRoute = (request: NextRequest) => {
  return AUTH_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route))
}
