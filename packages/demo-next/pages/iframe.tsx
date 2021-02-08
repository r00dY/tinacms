import React, { useEffect, useState } from 'react'
import { StyleSheetManager } from 'styled-components'

const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
  input !== null && input.tagName === 'IFRAME'

const IndexIframePage = () => {
  const [iframeHead, setIframeHead] = useState(undefined)

  useEffect(() => {
    const frame = document.getElementById('iframe')

    if (isIFrame(frame) && frame.contentWindow) {
      setIframeHead(frame.contentWindow.document.head)
    }
  }, [])

  console.log('iframe head', iframeHead)

  return (
    <StyleSheetManager target={iframeHead}>
      <div style={{ display: 'flex' }} id={'parent'}>
        <iframe
          width={800}
          style={{ margin: '100px auto', height: '80vh' }}
          src={'/nesting'}
          id={'iframe'}
        />
      </div>
    </StyleSheetManager>
  )
}

IndexIframePage.noTina = true

export default IndexIframePage
