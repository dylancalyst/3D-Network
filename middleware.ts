import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (request.nextUrl.pathname.startsWith('/login')) {
    if (token) {
      try {
        verify(token, SECRET_KEY)
        return NextResponse.redirect(new URL('/', request.url))
      } catch {
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    verify(token, SECRET_KEY)
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

