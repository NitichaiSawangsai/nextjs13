'use client'

import Link from 'next/link'
import { LANGUAGE } from '@/redux/slice/settingSlice'
import { LanguageSetup } from './LanguageSetup'
import { useSession, signOut } from 'next-auth/react'

export default function NavBar() {
  const session: any = useSession()

  return (
    <nav className="p-5 h-16 grid grid-flow-col items-center border-b shadow-green-400">
      <h1 className="text-lg font-bold">
        <Link href="/">MOVIES CATCHER</Link>
      </h1>
      <div className="flex gap-3 justify-end">
        <div className="flex">
          <LanguageSetup language={LANGUAGE.TH} />
          <div className="mx-1">|</div>
          <LanguageSetup language={LANGUAGE.EN} />
        </div>
        {session.status === 'authenticated' ? (
          <div className="flex gap-1">
            <div>{session.data.user?.username}</div>
            <div
              onClick={async () =>
                signOut({
                  redirect: false,
                  callbackUrl: '/',
                })
              }
              className="font-bold"
            >
              LOGOUT
            </div>
          </div>
        ) : (
          <Link href="/auth/login" className="font-bold">
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  )
}
