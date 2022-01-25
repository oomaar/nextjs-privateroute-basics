import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session, loading } = useSession()

  if (loading) return null

  if (!loading && !session) return <p>Access Denied</p>

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  )
}