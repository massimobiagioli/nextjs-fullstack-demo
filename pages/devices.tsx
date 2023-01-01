import { GetServerSideProps } from 'next'
import { DeviceList } from '../components/DeviceList'
import { Layout } from '../components/Layout'
import { AuthInfo, GetUserId, WithAuth } from '../libs/cognito'
import GetDataStore from '../libs/datastore'
import { Device } from '../models'
import FindAllDevicesUseCase from '../useCases/FindAllDevicesUseCase'

type DevicesProps = AuthInfo & {
  devices: Device[]
}

export default function Devices(props: DevicesProps) {
  if (!props.authenticated || !props.userInfo.id) {
    return (
      <Layout authInfo={props}>
        <span>User is not authenticated</span>
      </Layout>
    )
  }

  return (
    <Layout authInfo={props}>
      <DeviceList devices={props.devices} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const findAllDevicesUseCase = FindAllDevicesUseCase(
    context,
    GetDataStore,
    GetUserId
  )
  const devices = await findAllDevicesUseCase()
  const data = {
    devices,
  }
  const withAuth = WithAuth(data)

  return withAuth(context)
}
