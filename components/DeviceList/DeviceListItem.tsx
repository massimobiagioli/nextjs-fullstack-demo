import { Device } from '../../models'
import { format } from 'date-fns'

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
    <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{device.name}</div>
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
