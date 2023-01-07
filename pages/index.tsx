import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { AuthInfo, withAuth } from '../libs/cognito'

export default function Home(authInfo: AuthInfo) {
  return (
    <Layout authInfo={authInfo}>
      <div className="m-4">
        <h3 className="title">Use Cases</h3>
        <ul>
          <li>
            <Link href="/devices">List all logged user devices</Link>
          </li>
          <li>
            <Link href="/devices/create">Create new device</Link>
          </li>
          <li>Update device</li>
          <li>Delete device</li>
        </ul>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
