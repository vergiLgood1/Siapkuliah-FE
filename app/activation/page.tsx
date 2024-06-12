'use client'

import { useActivationMutation } from '@/redux/features/auth-api-slice'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

interface Props {
  params: {
    uid: string
    token: string
  }
}

const ActivationPage = ({ params }: Props ) => {
      const router = useRouter()
      const [activation] = useActivationMutation()

  useEffect(() => {

     const { uid, token } = params

     activation({ uid, token })
     .unwrap()
     .then(()=> {
      toast.success("Account activated")
     })
     .catch(()=> {
      toast.error("Failed to activate account")
     })
     .finally(() => {
      router.push("/auth/login/")
     })

  })

  return (
    <div>
      <h2>anajay</h2>
    </div>
  )
}

export default ActivationPage
