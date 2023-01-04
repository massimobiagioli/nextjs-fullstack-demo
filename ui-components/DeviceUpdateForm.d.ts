/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { Device } from '../models'
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal'
import {
  GridProps,
  SwitchFieldProps,
  TextFieldProps,
} from '@aws-amplify/ui-react'
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>
export declare type DeviceUpdateFormInputValues = {
  name?: string
  address?: string
  isActive?: boolean
}
export declare type DeviceUpdateFormValidationValues = {
  name?: ValidationFunction<string>
  address?: ValidationFunction<string>
  isActive?: ValidationFunction<boolean>
}
export declare type FormProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type DeviceUpdateFormOverridesProps = {
  DeviceUpdateFormGrid?: FormProps<GridProps>
  name?: FormProps<TextFieldProps>
  address?: FormProps<TextFieldProps>
  isActive?: FormProps<SwitchFieldProps>
} & EscapeHatchProps
export declare type DeviceUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: DeviceUpdateFormOverridesProps | undefined | null
  } & {
    id?: string
    device?: Device
    onSubmit?: (
      fields: DeviceUpdateFormInputValues
    ) => DeviceUpdateFormInputValues
    onSuccess?: (fields: DeviceUpdateFormInputValues) => void
    onError?: (
      fields: DeviceUpdateFormInputValues,
      errorMessage: string
    ) => void
    onCancel?: () => void
    onChange?: (
      fields: DeviceUpdateFormInputValues
    ) => DeviceUpdateFormInputValues
    onValidate?: DeviceUpdateFormValidationValues
  } & React.CSSProperties
>
export default function DeviceUpdateForm(
  props: DeviceUpdateFormProps
): React.ReactElement
