import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { Layout } from '../components/Layout'
import { AuthInfo, withAuth } from '../libs/cognito'

export default function UserProfile(authInfo: AuthInfo) {
  if (!authInfo.authenticated) {
    return Router.push('/')
  }

  return (
    <Layout authInfo={authInfo}>
      <div className="m-4">
        <h3 className="title">User Profile</h3>
        <fieldset disabled>
          <div className="field">
            <label className="label">Nickname</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={authInfo.userInfo.nickname}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                value={authInfo.userInfo.email}
              />
            </div>
          </div>
        </fieldset>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuth(context)
