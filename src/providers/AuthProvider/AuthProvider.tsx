import { useCreateSessionQuery, useGetSessionQuery } from '@/api'
import { Turnstile } from '@marsidev/react-turnstile'
import { Loading } from 'antd-mobile'
import { useState } from 'react'
import styles from './AuthProvider.module.scss'
import { isProduction } from '@/constants'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const hasUser = localStorage.getItem('hasUser')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const { data, isLoading: isLoadingSignUp } = useCreateSessionQuery(
    captchaToken as string,
    {
      skip: Boolean((isProduction && !captchaToken) || hasUser),
    }
  )

  console.log('fff', { data })
  const { isLoading: isLoadingSignIn } = useGetSessionQuery(undefined, {
    skip: Boolean(!hasUser || data?.user),
  })

  if (!hasUser && isProduction)
    return (
      <div className={styles.authProvider}>
        <Turnstile
          siteKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onSuccess={(token) => {
            setCaptchaToken(token)
          }}
        />
      </div>
    )

  if (isLoadingSignUp || isLoadingSignIn) return <Loading />

  return children
}
