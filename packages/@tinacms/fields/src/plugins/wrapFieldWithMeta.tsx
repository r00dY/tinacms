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
import { FieldProps } from './fieldProps'
import styled, { css } from 'styled-components'

type InputFieldType<ExtraFieldProps, InputProps> = FieldProps<InputProps> &
  ExtraFieldProps & {
    topRightContent?: any
  }

// Wraps the Field component in labels describing the field's meta state
// Add any other fields that the Field component should expect onto the ExtraFieldProps generic type

export function FieldMetaWrapper<ExtraFieldProps = {}, InputProps = {}>(
  props: InputFieldType<ExtraFieldProps, InputProps>
) {
  return (
    <FieldMeta
      name={props.input.name}
      label={props.field.label}
      description={props.field.description}
      error={props.meta.error}
      noWrap={props.noWrap}
      topRightContent={props.topRightContent}
    >
      {props.children}
    </FieldMeta>
  )
}

export function wrapFieldsWithMeta<ExtraFieldProps = {}, InputProps = {}>(
  Field:
    | React.StatelessComponent<InputFieldType<ExtraFieldProps, InputProps>>
    | React.ComponentClass<InputFieldType<ExtraFieldProps, InputProps>>
) {
  return (props: InputFieldType<ExtraFieldProps, InputProps>) => (
    <FieldMetaWrapper {...props}>
      <Field {...props} />
    </FieldMetaWrapper>
  )
}

interface FieldMetaProps {
  name: string
  children: any
  label?: string
  description?: string
  error?: string
  margin?: boolean
  noWrap?: boolean
  topRightContent?: any
}

export const FieldMeta = ({
  name,
  label,
  description,
  error,
  margin = true,
  children,
  noWrap,
  topRightContent,
}: FieldMetaProps) => {
  const content = (
    <div style={{ display: 'block' }}>
      {children}
      {error && <FieldError>{error}</FieldError>}
    </div>
  )

  if (noWrap) {
    return content
  }

  return (
    <FieldWrapper margin={margin}>
      <FieldLabelWrapper>
        <FieldLabel htmlFor={name}>
          {label || name}
          {description && <FieldDescription>{description}</FieldDescription>}
        </FieldLabel>

        {topRightContent && <div>{topRightContent}</div>}
      </FieldLabelWrapper>
      {content}
    </FieldWrapper>
  )
}

// Styling
export const FieldWrapper = styled.div<{ margin: boolean }>`
  position: relative;

  ${props =>
    props.margin &&
    css<any>`
      margin-bottom: var(--tina-padding-big);
    `};
`

export const FieldLabelWrapper = styled.div`
  all: unset;
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
`

export const FieldLabel = styled.label`
  all: unset;
  font-family: 'Inter', sans-serif;
  display: block;
  font-size: var(--tina-font-size-1);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.35;
  color: var(--tina-color-grey-8);
  text-overflow: ellipsis;
  overflow: hidden;
`

export const FieldDescription = styled.span`
  all: unset;
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: var(--tina-font-size-0);
  font-style: italic;
  font-weight: lighter;
  color: var(--tina-color-grey-6);
  padding-top: 4px;
  white-space: normal;
  margin: 0;
`

const FieldError = styled.span`
  display: block;
  color: red;
  font-size: var(--tina-font-size-1);
  margin-top: 8px;
  font-weight: var(--tina-font-weight-regular);
`
