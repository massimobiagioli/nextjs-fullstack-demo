import { GetServerSideProps } from 'next'
import Router, { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'
import { AuthInfo, withAuth } from '../../libs/cognito'
import DeviceUpdateForm from '../../ui-components/DeviceUpdateForm'

export default function UpdateDevice(authInfo: AuthInfo) {
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
      <DeviceUpdateForm
        id={id as string}
        onSuccess={() => {
          Router.push('/devices')
        }}
        onError={(error) => {
          console.error(error)
        }}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
