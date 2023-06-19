import { useTranslations } from 'next-intl'

export default function AdminPage() {
  const t = useTranslations('HOME')
  return <main className="">{t('title')}</main>
}
