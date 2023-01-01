import { Device } from '../../models'

type DeviceListItemProps = {
  device: Device
}

export default function DeviceListItem({ device }: DeviceListItemProps) {
  return (
    <div className="column">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{device.name}</div>
        </div>
        <div className="card-body">
          <div>
            <span>Address: </span>
            <span>{device.address}</span>
          </div>
          <div>
            <span>Created at: </span>
            <span>{device.createdAt}</span>
          </div>
          <div>
            <span>Updated at: </span>
            <span>{device.updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
