import Router from 'next/router'
import GetDataStore from '../../libs/datastore'
import DeleteDeviceUseCase from '../../useCases/DeleteDeviceUseCase'

const deleteDeviceById = async (deviceId: string) => {
  const deleteDeviceUseCase = DeleteDeviceUseCase(GetDataStore(false))
  try {
    await deleteDeviceUseCase(deviceId)
    Router.push('/devices')
  } catch (error) {
    console.error(error)
  }
}

type DeviceDeleteProps = {
  id: string
}

export default function DeviceDelete({ id }: DeviceDeleteProps) {
  return (
    <div className="container m-4">
      Delete device <strong>{id}</strong> ?
      <div className="mt-4">
        <button
          className="button is-danger m-2"
          onClick={() => deleteDeviceById(id)}
        >
          Confirm
        </button>
        <button
          className="button is-primary m-2"
          onClick={() => Router.push('/devices')}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
