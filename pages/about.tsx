import { GetServerSideProps } from 'next'
import { Layout } from '../components/Layout'
import { AuthInfo, withAuth } from '../libs/infrastructure/cognito/auth'

export default function About(authInfo: AuthInfo) {
  return (
    <Layout authInfo={authInfo}>
      <div>ABOUT</div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
