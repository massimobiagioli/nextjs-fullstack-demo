import { serializeModel } from '@aws-amplify/datastore/ssr'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Device } from '../models'
import { GetDataStoreFn } from '../libs/datastore'
import { GetUserIdFn } from '../libs/cognito'
import { SortDirection } from 'aws-amplify'

const FindAllDevicesUseCase =
  (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
    GetDataStore: GetDataStoreFn,
    GetUserId: GetUserIdFn
  ) =>
  async () => {
    const DataStore = GetDataStore(context)
    const userId = await GetUserId(context)
    if (!userId) {
      return []
    }
    const devices = await DataStore.query(
      Device,
      (device) => device.owner.eq(userId),
      { sort: (device) => device.address(SortDirection.ASCENDING) }
    )
    return serializeModel(devices)
  }

export default FindAllDevicesUseCase
