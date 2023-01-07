import Link from 'next/link'

export default function DeviceNew() {
  return (
    <div className="m-4">
      <Link href="/devices/create">
        <i className="fas fa-circle-plus fa-2x mr-2"></i>
      </Link>
    </div>
  )
}
