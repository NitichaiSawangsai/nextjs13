import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text' },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.BACKEND_API_ENDPOINT}/api/v1/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.username,
          }),
        })

        const respon = await res.json()

        if (!respon?.accessToken) {
          return null
        }

        const res2 = await fetch(`${process.env.BACKEND_API_ENDPOINT}/api/v1/management/user`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${respon?.accessToken}`,
          },
        })

        const user = await res2.json()

        if (!user?.email) {
          return null
        }

        return {
          ...user,
          accessToken: respon.accessToken,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
})

export { handler as GET, handler as POST }
