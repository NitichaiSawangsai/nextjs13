import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('HOME')
  return <main className="">{t('title')}</main>
}
