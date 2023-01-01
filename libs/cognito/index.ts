import { withSSRContext, Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export type UserInfo = {
  id?: string
  email?: string
  nickname?: string
}

export type Authenticated = {
  authenticated: true
  userInfo: UserInfo
}

export type Unauthenticated = {
  authenticated: false
}

export type AuthInfo = Authenticated | Unauthenticated

export const signOut = async function (): Promise<void> {
  try {
    await Auth.signOut()
  } catch (err) {
    console.log('error signing out: ', err)
  }
}

export type GetUserIdFn = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => Promise<string | undefined>

export const GetUserId = async function (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<string | undefined> {
  const { Auth } = withSSRContext(context)
  try {
    const cognitoUser = await Auth.currentAuthenticatedUser()
    return cognitoUser.getUsername()
  } catch (err) {
    return undefined
  }
}

async function getUserInfo(user: CognitoUser): Promise<UserInfo> {
  return new Promise((resolve, reject) => {
    user.getUserAttributes((err, attributes) => {
      if (err) {
        reject(err)
      }
      resolve({
        id: attributes?.find((attr) => attr.Name === 'sub')?.Value,
        email: attributes?.find((attr) => attr.Name === 'email')?.Value,
        nickname: attributes?.find((attr) => attr.Name === 'nickname')?.Value,
      })
    })
  })
}

export const WithAuth =
  (data?: { [key: string]: any }) =>
  async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    const { Auth } = withSSRContext(context)
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser()
      const userInfo = await getUserInfo(cognitoUser)
      return {
        props: {
          authenticated: true,
          userInfo,
          ...data,
        },
      }
    } catch (err) {
      return {
        props: {
          authenticated: false,
        },
      }
    }
  }

export const withAuth = WithAuth()
