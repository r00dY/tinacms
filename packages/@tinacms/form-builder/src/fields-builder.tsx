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
import { Form, Field } from '@tinacms/forms'
import { useCMS } from '@tinacms/react-core'
import { Field as FinalField } from 'react-final-form'
import { FieldPlugin } from './field-plugin'
import styled from 'styled-components'

export interface FieldBuilderProps {
  form: Form
  field: Field
  noWrap?: boolean
}

export function FieldBuilder({ form, field, noWrap }: FieldBuilderProps) {
  const cms = useCMS()

  if (field.component === null) return null

  const plugin = cms.plugins
    .findOrCreateMap<FieldPlugin>('field')
    .find(field.component as string)

  let type: string | undefined
  if (plugin && plugin.type) {
    type = plugin.type
  }

  const parse = getProp('parse', field, plugin)
  const validate = getProp('validate', field, plugin)

  let format = field.format

  if (!format && plugin && plugin.format) {
    format = plugin.format
  }

  let defaultValue = field.defaultValue

  if (!parse && plugin && plugin.defaultValue) {
    defaultValue = plugin.defaultValue
  }

  return (
    <FinalField
      name={field.name}
      key={field.name}
      type={type}
      parse={
        parse
          ? (value: any, name: string) => parse!(value, name, field)
          : undefined
      }
      format={
        format
          ? (value: any, name: string) => format!(value, name, field)
          : undefined
      }
      defaultValue={defaultValue}
      validate={(value, values, meta) => {
        if (validate) {
          return validate(value, values, meta, field)
        }
      }}
    >
      {fieldProps => {
        if (typeof field.component !== 'string' && field.component !== null) {
          return (
            <field.component
              {...fieldProps}
              form={form.finalForm}
              tinaForm={form}
              field={field}
              noWrap={noWrap}
            />
          )
        }

        if (plugin) {
          return (
            <plugin.Component
              {...fieldProps}
              form={form.finalForm}
              tinaForm={form}
              field={field}
              noWrap={noWrap}
            />
          )
        }

        return <p>Unrecognized field type</p>
      }}
    </FinalField>
  )
}

export interface FieldsBuilderProps {
  form: Form
  fields: Field[]
}

export function FieldsBuilder({ form, fields }: FieldsBuilderProps) {
  return (
    <FieldsGroup>
      {fields.map((field: Field) => {
        return <FieldBuilder field={field} form={form} />
      })}
    </FieldsGroup>
  )
}

export const FieldsGroup = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px 20px 0 20px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto !important;
`

/**
 *
 * @param name
 * @param field
 * @param plugin
 */
function getProp(
  name: keyof FieldPlugin & keyof Field,
  field: Field,
  plugin?: FieldPlugin
): any {
  let prop = field[name]
  if (!prop && plugin && plugin[name]) {
    prop = plugin[name]
  }
  return prop
}
