import { withAuthenticator } from '@aws-amplify/ui-react'
import Router from 'next/router'
import { useEffect } from 'react'

function Login() {
  useEffect(() => {
    Router.push('/')
  }, [])

  return <></>
}

export default withAuthenticator(Login)
