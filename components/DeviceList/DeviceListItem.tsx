import { Device } from '../../models'
import { format } from 'date-fns'
import Link from 'next/link'

type DeviceListItemProps = {
  device: Device
}

function formatDateTimeString(dateAsString?: string | null) {
  if (!dateAsString) {
    return '-'
  }
  const date = new Date(dateAsString)
  return format(date, 'yyyy-MM-dd HH:mm:ss')
}

export default function DeviceListItem({ device }: DeviceListItemProps) {
  return (
    <div className="column is-one-quarter-widescreen is-one-third is-full-mobile">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">
            <Link href={`/updateDevice/${device.id}`}>{device.name}</Link>
          </div>
          <div>
            <Link href={`/deleteDevice/${device.id}`} className="m-2">
              <i className="fas fa-trash-alt"></i>
            </Link>
            {device.isActive ? (
              <span className="tag m-2 is-success">Active</span>
            ) : (
              <span className="tag m-2 is-danger">Not Active</span>
            )}
          </div>
        </div>
        <div className="card-body p-4">
          <div>
            <span>Address: </span>
            <span>{device.address}</span>
          </div>
          <div>
            <span>Created at: </span>
            <span>{formatDateTimeString(device.createdAt)}</span>
          </div>
          <div>
            <span>Updated at: </span>
            <span>{formatDateTimeString(device.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
