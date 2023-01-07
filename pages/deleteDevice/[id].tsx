import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import DeviceDelete from '../../components/DeviceDelete/DeviceDelete'
import { Layout } from '../../components/Layout'
import { AuthInfo, withAuth } from '../../libs/cognito'

export default function DeleteDevice(authInfo: AuthInfo) {
  const router = useRouter()
  const { id } = router.query

  if (!authInfo.authenticated || !authInfo.userInfo.id) {
    return (
      <Layout authInfo={authInfo}>
        <span>User is not authenticated</span>
      </Layout>
    )
  }

  return (
    <Layout authInfo={authInfo}>
      <DeviceDelete id={id as string} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
