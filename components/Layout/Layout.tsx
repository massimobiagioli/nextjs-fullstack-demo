import { Navbar } from '.'
import { AuthInfo } from '../../libs/cognito'

type LayoutProps = {
  children: JSX.Element
  authInfo?: AuthInfo
}

export default function Layout({ children, authInfo }: LayoutProps) {
  return (
    <>
      <Navbar authInfo={authInfo} />
      <main>{children}</main>
    </>
  )
}
