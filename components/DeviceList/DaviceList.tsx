import { Device } from '../../models'
import { DeviceListItem } from '.'

type DeviceListProps = {
  devices: Device[]
}

export default function DeviceList({ devices }: DeviceListProps) {
  if (devices.length === 0) {
    return <div className="m-4">No devices found</div>
  }

  return (
    <div className="columns is-multiline m-4">
      {devices.map((device) => (
        <DeviceListItem key={device.id} device={device} />
      ))}
    </div>
  )
}
