import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { Layout } from '../components/Layout'
import { AuthInfo, withAuth } from '../libs/cognito'
import DeviceCreateForm from '../ui-components/DeviceCreateForm'

export default function NewDevice(authInfo: AuthInfo) {
  if (!authInfo.authenticated || !authInfo.userInfo.id) {
    return (
      <Layout authInfo={authInfo}>
        <span>User is not authenticated</span>
      </Layout>
    )
  }

  return (
    <Layout authInfo={authInfo}>
      <DeviceCreateForm
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
