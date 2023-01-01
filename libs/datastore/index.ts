import { DataStore, withSSRContext } from 'aws-amplify'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export type GetDataStoreFn = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => typeof DataStore

const GetDataStore = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const SSR = withSSRContext(context)
  const dataStore: typeof DataStore = SSR.DataStore
  return dataStore
}

export default GetDataStore
