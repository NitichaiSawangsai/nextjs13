'use client'

import React, { type ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
type Props = {
  children: ReactNode
}

const Providers = ({ children }: Props) => <SessionProvider>{children}</SessionProvider>

export default Providers
