import { GetServerSideProps } from 'next'
import { Layout } from '../components/Layout'
import { AuthInfo, withAuth } from '../libs/cognito'

export default function Home(authInfo: AuthInfo) {
  return (
    <Layout authInfo={authInfo}>
      <div>HOME PAGE</div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
