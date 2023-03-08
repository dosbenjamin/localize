import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient({ req: request, res: response })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
}
