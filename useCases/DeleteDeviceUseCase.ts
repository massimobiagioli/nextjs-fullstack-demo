import { Device } from '../models'
import { DataStore } from 'aws-amplify'

const DeleteDeviceUseCase =
  (dataStore: typeof DataStore) => async (id: string) =>
    dataStore.delete(Device, id)

export default DeleteDeviceUseCase
