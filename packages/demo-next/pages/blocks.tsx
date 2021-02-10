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
import { useState } from 'react'
import styled from 'styled-components'
import { useJsonForm } from 'next-tinacms-json'
import {
  ModalProvider,
  BlockTemplate,
  Field,
  Modal,
  ModalPopup,
  ModalHeader,
  ModalBody,
  FieldsBuilder,
  ModalActions,
} from 'tinacms'
import {
  InlineForm,
  InlineImage,
  InlineText,
  InlineBlocks,
  BlocksControls,
  useInlineForm,
  InlineTextarea,
} from 'react-tinacms-inline'
import { InlineWysiwyg } from 'react-tinacms-editor'

import Layout from '../components/Layout'
import { InlineFieldContext } from 'react-tinacms-inline/src'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Button } from '@tinacms/styles'

export interface TestModalProps {
  close(): void
  payload: any
}

export function TestModal({ close, payload }: TestModalProps) {
  // function handleCancel(event: any) {
  //   event.stopPropagation()
  //   event.preventDefault()
  //   form.updateValues(initialValues)
  //   close()
  // }

  function handleClose(event: any) {
    event.stopPropagation()
    event.preventDefault()
    close()
  }

  const keys = Object.keys(payload.blocks)

  return (
    <Modal id="test-modal" onClick={e => e.stopPropagation()}>
      <ModalPopup>
        <ModalHeader close={close}>test modal</ModalHeader>
        <ModalBody>
          {keys.map(key => {
            return (
              <div>
                <button
                  onClick={e => {
                    payload.finish(key)
                    handleClose(e)
                  }}
                >
                  {key}{' '}
                </button>
                <br />
                <br />
              </div>
            )
          })}
        </ModalBody>
        <ModalActions>
          {/*<Button onClick={handleCancel}>Cancel</Button>*/}
          <Button
            onClick={handleClose}
            // disabled={form.values === initialValues}
            // primary
          >
            Confirm
          </Button>
        </ModalActions>
      </ModalPopup>
    </Modal>
  )
}

/**
 * This is an example page that uses Blocks from Json
 */
export default function BlocksExample({ jsonFile }) {
  const [data, form] = useJsonForm(jsonFile)

  const [customAddPayload, setCustomAddPayload] = useState(null)

  return (
    <ModalProvider>
      <Layout>
        <InlineForm form={form}>
          <DiscardChanges />
          <h1>
            <InlineText name="title" />
          </h1>
          <InlineImage
            name="hero_image"
            parse={media => media.id.replace('public/', '')}
            uploadDir={() => '/public/images/'}
          >
            {props => <ChildImage src={data.hero_image} {...props} />}
          </InlineImage>
          <hr />
          <Wrap>
            <InlineBlocks
              name="blocks"
              blocks={PAGE_BUILDER_BLOCKS}
              itemProps={{
                style: { backgroundColor: 'red' },
              }}
              min={0}
              max={4}
              customAddAction={(blocks, finish) => {
                setCustomAddPayload({
                  blocks,
                  finish,
                })
              }}
              components={{
                EmptyState: props => {
                  return (
                    <div
                      style={{
                        padding: 50,
                        border: '2px dashed red',
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        props.runCustomAddAction()
                      }}
                    >
                      <div>Add element</div>
                    </div>
                  )
                },
              }}
            />

            {customAddPayload && (
              <TestModal
                close={() => {
                  setCustomAddPayload(null)
                }}
                payload={customAddPayload}
              />
            )}
          </Wrap>
        </InlineForm>
      </Layout>

      <style jsx>
        {`
          h1 {
            margin-top: 1.5rem;
          }

          hr {
            width: 3rem;
          }
        `}
      </style>
    </ModalProvider>
  )
}

function ChildImage(props) {
  return <img src={props.previewSrc || props.src} />
}

/**
 * CallToAction template + Component
 */
const cta_template: BlockTemplate = {
  label: 'Call to Action',
  defaultItem: { url: '', text: 'Signup!' },
  fields: [
    { name: 'text', label: 'Text', component: 'text' },
    { name: 'url', label: 'URL', component: 'text' },
  ],
}

function CallToActionBlock({ index, data }) {
  return (
    <div className="block">
      <BlocksControls index={index}>
        <button
          onClick={() => window.open(data.url, '_blank')}
          style={{ display: 'block', background: 'pink' }}
        >
          {data.text}
        </button>
      </BlocksControls>
      <style jsx>
        {`
          div.block {
            margin: 2rem 0;
          }
        `}
      </style>
    </div>
  )
}

/**
 * Hero template + Component
 */
const hero_template: BlockTemplate = {
  label: 'Hero',
  defaultItem: { text: 'Spiderman' },
  fields: [],
}

function HeroBlock({ index }) {
  return (
    <div className="block">
      <BlocksControls index={index}>
        <h2>
          My Hero: <StyledBlockText name="text" />
        </h2>
      </BlocksControls>
      <style jsx>
        {`
          div.block {
            margin: 2rem 0;
          }
        `}
      </style>
    </div>
  )
}

/*
 ** Image template + Component
 */

function ImageBlock({ index, data }) {
  return (
    <div className="block">
      <BlocksControls index={index}>
        <InlineImage
          name="src"
          parse={media => media.id.replace('public/', '')}
          uploadDir={() => '/public/images/'}
          focusRing={false}
        />
      </BlocksControls>
      <style jsx>
        {`
          div.block {
            margin: 2rem 0;
          }
        `}
      </style>
    </div>
  )
}

const image_template: BlockTemplate = {
  label: 'Image',
  defaultItem: {
    _template: 'image',
    src: '/images/davisco-5E5N49RWtbA-unsplash.jpg',
    alt: 'image alt text',
  },
  fields: [{ name: 'alt', label: 'Image Alt', component: 'text' }],
}

const wysi_template: BlockTemplate = {
  label: 'Content',
  defaultItem: {
    _template: 'wysiwyg',
    content: '# Hello World',
  },
}

// Testing the block styled component override

const StyledBlockText = styled(InlineTextarea)`
  color: green;
  margin: 2rem 0;
`

/**
 * This is the Blocks lookup that was passed to `<InlineBlocks>` in the
 * main `BlocksExample` component.
 */
const PAGE_BUILDER_BLOCKS = {
  cta: {
    Component: CallToActionBlock,
    template: cta_template,
  },
  hero: {
    Component: HeroBlock,
    template: hero_template,
  },
  image: {
    Component: ImageBlock,
    template: image_template,
  },
  wysiwyg: {
    Component: ({ data }) => {
      return <InlineWysiwyg name="content">{data.content}</InlineWysiwyg>
    },
    template: wysi_template,
  },
}

/**
 * EVERYTHING BELOW HERE IS NOT IMPORTANT TO UNDERSTANDING BLOCKS
 */

BlocksExample.getInitialProps = async function() {
  const blocksData = await import(`../data/blocks.json`)
  return {
    jsonFile: {
      fileRelativePath: `data/blocks.json`,
      data: blocksData.default,
    },
  }
}

export function DiscardChanges() {
  const { form } = useInlineForm()

  return (
    <button
      onClick={() => {
        form.finalForm.reset()
      }}
    >
      Discard Changes
    </button>
  )
}

const Wrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
