'use client'

import { useAppSelector } from '@/redux/hooks'
import clsx from 'clsx'
import { useLocale } from 'next-intl'
import Link from 'next-intl/link'
import { usePathname } from 'next/navigation'

type Props = {
  language: string
}

export function LanguageSetup({ language }: Props) {
  const locale = useLocale()
  const pathname = usePathname()
  const regex = new RegExp(`^\\/${locale}`, 'g')

  return (
    <Link href={`${pathname.replace(regex, '') || '/'}`} locale={language}>
      <div
        className={clsx('cursor-pointer transition-opacity hover:opacity-60 font-bold', {
          'text-blue-500': language === locale,
        })}
      >
        {language.toUpperCase()}
      </div>
    </Link>
  )
}
