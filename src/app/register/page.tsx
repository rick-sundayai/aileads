import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function RegisterPage() {
  const supabase = createClientComponentClient()
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['github', 'google']}
      redirectTo="http://localhost:3000/"
    />
  )
}
