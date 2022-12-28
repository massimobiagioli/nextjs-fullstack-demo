import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { Layout } from '../components/Layout'
import { AuthInfo, withAuth } from '../libs/infrastructure/cognito/auth'

export default function Devices(authInfo: AuthInfo) {
  if (!authInfo.authenticated) {
    return Router.push('/')
  }

  return (
    <Layout authInfo={authInfo}>
      <div>DEVICES</div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
