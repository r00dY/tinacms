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

import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS, withTina } from 'tinacms'
import { GitClient, GitMediaStore } from '@tinacms/git-client'
import { GlobalStyles as TinaCustomStyles } from '@tinacms/styles'
import { NextGitMediaStore } from '../next-git-media-store'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'

//import { CustomPaginatorPlugin } from '../plugins/CustomPaginator'

function Empty() {
  return <span>Hello from a custom empty state Component</span>
}

export default class Site extends App {
  constructor() {
    super()
    this.cms = new TinaCMS({
      enabled: true,
      sidebar: {
        placeholder: Empty,
        position: 'overlay',
        hidden: process.env.NODE_ENV === 'production',
      },
      toolbar: {
        hidden: false,
      },
      alerts: {
        'plugin:add:form': {
          level: 'info',
          message: 'You can now edit the page',
        },
      },
      //plugins: [CustomPaginatorPlugin],
    })
    const client = new GitClient('http://localhost:3000/___tina')
    this.cms.registerApi('git', client)
    this.cms.media.store = new NextGitMediaStore(client)
    this.cms.plugins.add(MarkdownFieldPlugin)

    this.rootContainerRef = React.createRef()

    // added state.node in order to be able to anchor to the parent window
    this.state = {
      node: null,
    }
  }

  componentDidMount() {
    if (window.self === window.top) {
      this.setState({ node: this.rootContainerRef.current })
    } else {
      this.setState({
        node: window.parent.document.getElementById('rootContainer'),
      })
    }
  }

  render() {
    const { Component, pageProps } = this.props

    if (Component.noTina) {
      return (
        <div>
          <TinaCustomStyles />
          <div id={'rootContainer'} ref={this.rootContainerRef} />
          <Component {...pageProps} />
        </div>
      )
    }

    return (
      <div>
        // Example: this config doesn't load external 'Inter' Font
        <TinaProvider
          cms={this.cms}
          styled={false}
          rootContainerNode={this.state.node}
        >
          <TinaCustomStyles />
          <Component {...pageProps} />
        </TinaProvider>
      </div>
    )
  }
}

// const client = new GitClient('http://localhost:3000/___tina')

// export default withTina(App, {
//   apis: {
//     git: client,
//   },
//   media: {
//     store: new GitMediaStore(client),
//   },
//   sidebar: {
//     hidden: process.env.NODE_ENV === 'production',
//   },
// })
