import React from 'react'
import { TestimonialCard } from './_components/testimonial-card'
import LoginForm from '@/components/forms/login-form'
import { CardSignIn } from './_components/signin-form'
import MaxWidthWrapper from '@/components/max-width-wrapper'

const LoginPage = () => {
  return (
    <div>
       <div className="mt-7">
      <div className="p-4 sm:p-7">
        <MaxWidthWrapper className="flex items-center justify-center ">
          <TestimonialCard/>
          <CardSignIn />
        </MaxWidthWrapper>
      </div>
    </div>
    </div>
  )
}

export default LoginPage
