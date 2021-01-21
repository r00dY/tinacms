/**

 Copyright 2019 Forestry.io Inc

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */

import * as React from 'react'
import { Field, Form } from '@tinacms/forms'
import styled, { keyframes, css, StyledComponent } from 'styled-components'
import { FieldsBuilder, FieldBuilder } from '@tinacms/form-builder'
import { wrapFieldsWithMeta, FieldMetaWrapper } from './wrapFieldWithMeta'

export interface ResponsiveFieldDefinititon extends Field {
  component: 'responsive'
  subComponent: string
}

export interface ResponsiveExtraProps {
  // input: any
  // meta: any
  field: ResponsiveFieldDefinititon
  // form: any
  // tinaForm: Form,
}

function isValueResponsive(val: any): boolean {
  if (typeof val !== 'object') {
    return false
  }

  // This condition assumes that if both desktop and mobile properties are there, but _isRes is not explicitly false (for example non existent), we stil assume it's responsive.
  // It has advantage for defaultValue, when we want to set desktop and mobile values WITHOUT setting _isRes
  if (
    val.desktop !== undefined &&
    val.mobile !== undefined &&
    val._isRes !== false
  ) {
    return true
  }

  if (val._isRes === true) {
    return true
  }

  return false
}

const normalizeValue = (value: any, field: Field) => {
  const defaultDesktop = field.defaultValue?.desktop
  const defaultMobile = field.defaultValue?.mobile

  if (typeof value !== 'object') {
    return {
      _isRes: false,
      desktop: defaultDesktop,
    }
  }

  let desktop =
    value?.desktop ===
    undefined /* only undefined causes default to trigger, null doesn't! */
      ? defaultDesktop
      : value?.desktop

  let mobile = undefined
  if (isValueResponsive(value)) {
    mobile = value?.mobile

    if (mobile === undefined) {
      if (defaultMobile) {
        mobile = defaultMobile
      } else {
        mobile = desktop
      }
    }
  }

  return {
    _isRes: isValueResponsive(value),
    desktop,
    mobile,
  }
}

type ResponsiveButtonProps = {
  selected: boolean
}

const ResponsiveButton = styled.button<ResponsiveButtonProps>`
  all: unset;
  border: 1px solid var(--tina-color-primary);
  height: 16px;
  font-size: 12px;
  background-color: ${props =>
    props.selected ? 'var(--tina-color-primary)' : 'transparent'};
  color: ${props => (props.selected ? 'white' : 'var(--tina-color-primary)')};
  border-radius: 6px;
  padding: 0 4px;
  cursor: pointer;
`

export const Responsive = (props: any) => {
  const { tinaForm, field, input } = props

  const fieldDesktop: Field = {
    ...field,
    component: field.subComponent,
    name: `${field.name}.desktop`,
    defaultValue: undefined,
  }

  const fieldMobile: Field = {
    ...field,
    component: field.subComponent,
    name: `${field.name}.mobile`,
    defaultValue: undefined,
  }

  const normalizedValue = normalizeValue(input.value, field)

  const button = (
    <ResponsiveButton
      selected={normalizedValue._isRes}
      onClick={() => {
        const desktopVal = input.value?.desktop

        if (normalizedValue._isRes) {
          input.onChange({
            _isRes: false,
            desktop: desktopVal,
          })
        } else {
          input.onChange({
            _isRes: true,
            desktop: desktopVal,
            // mobile: desktopVal // for mobile we can't have 'undefined' as it would mean
          })
        }
      }}
    >
      res
    </ResponsiveButton>
  )

  return (
    <FieldMetaWrapper {...props} topRightContent={button}>
      <FieldBuilder form={tinaForm} field={fieldDesktop} noWrap={true} />
      {normalizedValue._isRes && (
        <div style={{ marginTop: '8px' }}>
          <FieldBuilder form={tinaForm} field={fieldMobile} noWrap={true} />
        </div>
      )}
    </FieldMetaWrapper>
  )
}

export interface ResponsiveFieldProps {
  field: Field
}

export function ResponsiveField(props: ResponsiveFieldProps) {
  return <div>Subfield: {props.field.label || props.field.name}</div>
}

export const ResponsiveFieldPlugin = {
  // __type: 'field',
  name: 'responsive',
  Component: Responsive,
  parse: (value: any, name: string, field: ResponsiveFieldDefinititon) => {
    return normalizeValue(value, field)
  },
}

export default ResponsiveFieldPlugin
