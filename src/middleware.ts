import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { useSession } from 'next-auth/react'

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'th'],

//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale: 'th',
// })

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request

  let pathname = nextUrl?.pathname
  let language = pathname?.split('/')?.[1]
  language = language?.length > 1 && language?.length < 4 ? `/${language}` : '/en'

  if (!checkIfUserIsLoggedIn(request) && pathname?.indexOf('auth/login') === -1) {
    const redirectUrl = new URL(`${language}/auth/login`, request.nextUrl.origin)
    return NextResponse.redirect(redirectUrl.href)
  } else if (checkIfUserIsLoggedIn(request) && pathname?.indexOf('auth/login') > -1) {
    const redirectUrl = new URL(`${language}`, request.nextUrl.origin)
    return NextResponse.redirect(redirectUrl.href)
  }

  return NextResponse.next()
}

function checkIfUserIsLoggedIn(request: NextRequest): boolean {
  // Implement your actual login check logic here
  // For example, check if the user has a valid session or token
  // Return true if the user is logged in, false otherwise
  return false
}
