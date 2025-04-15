import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Auth() {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign Out</button>
    </>
  )
}
