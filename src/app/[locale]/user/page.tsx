import { useTranslations } from 'next-intl'

export default function UserPage() {
  const t = useTranslations('HOME')
  return <main className="">{t('title')}</main>
}
