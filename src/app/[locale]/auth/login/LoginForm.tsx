'use client'

import { signIn, useSession } from 'next-auth/react'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useRouter } from 'next-intl/client'

export default function LoginForm() {
  const session = useSession()
  const router = useRouter()
  const [error, setError] = useState(false)
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    async onSubmit(values) {
      setError(false)
      const result = await signIn('credentials', {
        username: values.username,
        redirect: false,
        callbackUrl: '/',
      })

      if (result?.error === 'CredentialsSignin') {
        setError(true)
      }
    },
  })

  useEffect(() => {
    console.log('session ', session)
    if (session.status === 'authenticated') {
      router.replace('/')
    }
  }, [router, session.status])

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="grid gap-3 min-w-[300px]">
        <div className="text-center text-xl font-bold mb-3">DO Utilization</div>
        <div className="grid w-full gap-1">
          <label htmlFor="username">Email</label>
          <input
            id="username"
            name="username"
            placeholder="Email"
            className="p-3 w-full text-black"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        {/* <div className="grid w-full gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Password"
            className="p-3 w-full text-black"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div> */}
        {error && <div className="text-red-500">email is invalid.</div>}
        <div className="border border-white"></div>
        <button type="submit" className="text-white bg-blue-500 p-3">
          Login
        </button>
      </section>
    </form>
  )
}
