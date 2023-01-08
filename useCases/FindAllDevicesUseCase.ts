import { serializeModel } from '@aws-amplify/datastore/ssr'
import { Device } from '../models'
import { DataStore, SortDirection } from 'aws-amplify'

const FindAllDevicesUseCase =
  (dataStore: typeof DataStore, userId?: string) => async () => {
    if (!userId) {
      return []
    }
    const devices = await dataStore.query(
      Device,
      (device) => device.owner.eq(userId),
      { sort: (device) => device.address(SortDirection.ASCENDING) }
    )
    return serializeModel(devices)
  }

export default FindAllDevicesUseCase
