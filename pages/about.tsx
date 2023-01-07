import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { AuthInfo, withAuth } from '../libs/cognito'

export default function About(authInfo: AuthInfo) {
  return (
    <Layout authInfo={authInfo}>
      <div className="m-4">
        <h3 className="title">Credits</h3>
        <ul>
          <li>
            <Link href="https://nextjs.org/">Next.js</Link>
          </li>
          <li>
            <Link href="https://bulma.io/">Bulma</Link>
          </li>
          <li>
            <Link href="https://aws.amazon.com/it/amplify/">AWS Amplify</Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
