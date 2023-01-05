import { DataStore, withSSRContext } from 'aws-amplify'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export type GetDataStoreFn = (
  useSSR: boolean,
  context?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => typeof DataStore

const GetDataStore = (
  useSSR: boolean,
  context?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  if (!useSSR) {
    return DataStore
  }
  const SSR = withSSRContext(context)
  const dataStore: typeof DataStore = SSR.DataStore
  return dataStore
}

export default GetDataStore
