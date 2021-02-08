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
import { createPortal } from 'react-dom'
import { StyleReset } from '@tinacms/styles'
import { useModalContainer } from '../ModalProvider'
import { ModalOverlay } from './ModalOverlay'
import { StyleSheetManager } from 'styled-components'
import Draggable from 'react-draggable'

export type ModalProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Modal = (props: ModalProps) => {
  const { portalNode } = useModalContainer()

  if (!portalNode) return null

  let content = (
    <StyleReset>
      <ModalOverlay>
        <Draggable>
          <div {...props} />
        </Draggable>
      </ModalOverlay>
    </StyleReset>
  )

  if (document && document !== portalNode.ownerDocument) {
    content = (
      <StyleSheetManager target={portalNode.ownerDocument!.head}>
        {content}
      </StyleSheetManager>
    )
  }

  return createPortal(content, portalNode)
}
