'use client'

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Spinner } from '@/components/ui/spinner';
import useSocialAuth from '@/hooks/forms/use-social-auth';
import { useSocialAuthenticateMutation } from '@/redux/features/auth-api-slice';
import React from 'react'

const GoogleOAuthPage = () => {
  const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, 'google-oauth2');

	return (
		<MaxWidthWrapper className='flex items-center justify-center min-h-screen'>
			<Spinner  size="lg" />
		</MaxWidthWrapper>
	);
}
export default GoogleOAuthPage
