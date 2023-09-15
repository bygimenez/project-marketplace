'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header>
      {
        session   == null && <Button onClick={handleSignIn}  className="bg-purple-800 text-white shadow-xl shadow-purple-900/30 text-semibold"  color="secondary">
                            Login
                            </Button>
      }
    </header>
  )
}