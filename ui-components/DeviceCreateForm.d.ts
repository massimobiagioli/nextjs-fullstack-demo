/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
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
export declare type DeviceCreateFormInputValues = {
  name?: string
  address?: string
  isActive?: boolean
}
export declare type DeviceCreateFormValidationValues = {
  name?: ValidationFunction<string>
  address?: ValidationFunction<string>
  isActive?: ValidationFunction<boolean>
}
export declare type FormProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type DeviceCreateFormOverridesProps = {
  DeviceCreateFormGrid?: FormProps<GridProps>
  name?: FormProps<TextFieldProps>
  address?: FormProps<TextFieldProps>
  isActive?: FormProps<SwitchFieldProps>
} & EscapeHatchProps
export declare type DeviceCreateFormProps = React.PropsWithChildren<
  {
    overrides?: DeviceCreateFormOverridesProps | undefined | null
  } & {
    clearOnSuccess?: boolean
    onSubmit?: (
      fields: DeviceCreateFormInputValues
    ) => DeviceCreateFormInputValues
    onSuccess?: (fields: DeviceCreateFormInputValues) => void
    onError?: (
      fields: DeviceCreateFormInputValues,
      errorMessage: string
    ) => void
    onCancel?: () => void
    onChange?: (
      fields: DeviceCreateFormInputValues
    ) => DeviceCreateFormInputValues
    onValidate?: DeviceCreateFormValidationValues
  } & React.CSSProperties
>
export default function DeviceCreateForm(
  props: DeviceCreateFormProps
): React.ReactElement
