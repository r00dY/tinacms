# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.37.0](https://github.com/tinacms/tinacms/compare/v0.36.1...v0.37.0) (2021-02-08)


### Bug Fixes

* check if cleanup is needed before cleaning up ([bbdc166](https://github.com/tinacms/tinacms/commit/bbdc166190446311ea3374e1db92246beae24da9))





## [0.36.1](https://github.com/tinacms/tinacms/compare/v0.36.0...v0.36.1) (2021-02-01)

**Note:** Version bump only for package react-tinacms-editor





# [0.36.0](https://github.com/tinacms/tinacms/compare/v0.35.1...v0.36.0) (2021-01-25)

**Note:** Version bump only for package react-tinacms-editor





# [0.35.0](https://github.com/tinacms/tinacms/compare/v0.34.0...v0.35.0) (2020-12-15)

**Note:** Version bump only for package react-tinacms-editor





# [0.34.0](https://github.com/tinacms/tinacms/compare/v0.33.0...v0.34.0) (2020-11-23)

**Note:** Version bump only for package react-tinacms-editor





# [0.33.0](https://github.com/tinacms/tinacms/compare/v0.32.1...v0.33.0) (2020-11-16)


### Features

* **react-tinacms-editor:** InlineWysiwyg only renders ProseMirror for focused editor ([24a3372](https://github.com/tinacms/tinacms/commit/24a3372e83dd51faad0fa0fa480a716ab140c7b8))





## [0.32.1](https://github.com/tinacms/tinacms/compare/v0.32.0...v0.32.1) (2020-10-29)


### Bug Fixes

* **react-tinacms-editor:** correct typedef path ([064e5fe](https://github.com/tinacms/tinacms/commit/064e5fe33365a4daddbedcfe6505ac62d6185d38))
* **react-tinacms-editor:** fixes menu jumping to top on scroll ([47fb08f](https://github.com/tinacms/tinacms/commit/47fb08fe8ef1a592ba5384c3f6d37f8227cec46f))





# [0.32.0](https://github.com/tinacms/tinacms/compare/v0.31.0...v0.32.0) (2020-10-20)


### Bug Fixes

* **react-tinacms-inline:** some fields were mis-handling focus ([5d7318c](https://github.com/tinacms/tinacms/commit/5d7318c0ccdfe89709f2e8bc7d1c8f8d3a115019)), closes [#1516](https://github.com/tinacms/tinacms/issues/1516)


### Features

* **react-tinacms-editor:** image directory prop --> uploadDir func ([67fc8d9](https://github.com/tinacms/tinacms/commit/67fc8d97befbea7e08751d5625103d8d3553046d))
* **react-tinacms-editor:** markdown & html fields accept image props ([06d92e1](https://github.com/tinacms/tinacms/commit/06d92e138365bd73cae2daa20d8a116d7da6f4e0))
* **react-tinacms-editor:** media mgr opens from uploadDir ([7e1b133](https://github.com/tinacms/tinacms/commit/7e1b1330d8fe777469d13fe65f43c75259c9e288))
* **react-tinacms-editor:** parse accepts media object ([f6cf123](https://github.com/tinacms/tinacms/commit/f6cf123039669c477aef6176cdc4187b80eaf19d))
* **react-tinacms-editor:** wysiwyg menu opens media mgr ([026e633](https://github.com/tinacms/tinacms/commit/026e633d97d5462f4d020ce87ca15735c3c08cc7))


### Reverts

* Revert "chore(react-tinacms-editor): mediaDir not optional" ([af20d84](https://github.com/tinacms/tinacms/commit/af20d849d11da5c93b453b8a63f9e6d9bee92363))





# [0.31.0](https://github.com/tinacms/tinacms/compare/v0.30.0...v0.31.0) (2020-10-05)


### Bug Fixes

* missing key names ([798ed84](https://github.com/tinacms/tinacms/commit/798ed847b327ba2fe5cadf8be9a263c2e04b7220))





# [0.30.0](https://github.com/tinacms/tinacms/compare/v0.29.0...v0.30.0) (2020-09-10)


### Bug Fixes

* link modal keybaord shortcut ([96de0de](https://github.com/tinacms/tinacms/commit/96de0de62710dc897f6f5de6c615a49a1f8e6829))
* wysiwym image modal issues ([4473310](https://github.com/tinacms/tinacms/commit/447331019878289471a2f0e885d47b7e8a05c4b7))
* wysiwym table and link modal ([5965e12](https://github.com/tinacms/tinacms/commit/5965e122b3855defedbba45ab92b2a917af9cd70))


### Features

* keyboard shortcut for toggle editor mode ([03074ac](https://github.com/tinacms/tinacms/commit/03074ac36ca6d542e29883b7f0f21957d9a4b771))





# [0.29.0](https://github.com/tinacms/tinacms/compare/v0.28.0...v0.29.0) (2020-08-25)


### Bug Fixes

* add parse function ([4add855](https://github.com/tinacms/tinacms/commit/4add855928e3557fc9c97985399fe68b640e5931))





# [0.28.0](https://github.com/tinacms/tinacms/compare/v0.27.3...v0.28.0) (2020-08-17)


### Bug Fixes

* **react-tinacms-editor:** prosemirror image plugin is only added if imageProps was was defined ([c29cc4c](https://github.com/tinacms/tinacms/commit/c29cc4c18e1a6b3ca3395cf51f3d274af2be58fb))
* **react-tinacms-editor:** renamed previewUrl to previewSrc to make it consistent with InlineImage component and ImageFieldPlugin ([db55a85](https://github.com/tinacms/tinacms/commit/db55a852ab445f7553b68bf1a9a62d5484afcb9f))
* **react-tinacms-editor:** seevral UX issues addressed for tables, headings, and the link modal ([#1393](https://github.com/tinacms/tinacms/issues/1393)) ([28cfaec](https://github.com/tinacms/tinacms/commit/28cfaec04cfdb63376b04e23113911af00ddad9c))
* **react-tinacms-editor:** when InlineWysiwyg is not given imageProps then images are disabled ([ebefdf1](https://github.com/tinacms/tinacms/commit/ebefdf1a914cdb9a2e2bd0f8ffbfc1dfea2fef52))


### Features

* **react-tinacms-editor:** by default InlineWysiwyg will use cms.media.store for the previewUrl ([d7dbda7](https://github.com/tinacms/tinacms/commit/d7dbda72954a28c3e990790b3656485e89004c37))
* **react-tinacms-editor:** InlineWysiwyg expects imageProps.parse to modify the filename before inserting the img tag ([1738671](https://github.com/tinacms/tinacms/commit/17386712e449c21355e44b928f7b06f9bf90c222))





## [0.27.3](https://github.com/tinacms/tinacms/compare/v0.27.2...v0.27.3) (2020-08-10)

**Note:** Version bump only for package react-tinacms-editor





## [0.27.2](https://github.com/tinacms/tinacms/compare/v0.27.1...v0.27.2) (2020-08-10)

**Note:** Version bump only for package react-tinacms-editor





## [0.27.1](https://github.com/tinacms/tinacms/compare/v0.27.0...v0.27.1) (2020-08-10)

**Note:** Version bump only for package react-tinacms-editor





# [0.27.0](https://github.com/tinacms/tinacms/compare/v0.26.0...v0.27.0) (2020-08-10)


### Features

* **react-tinacms-editor:** InlineWysiwyg imageProps.upload now defaults to using the cms.media.store to upload images ([166f380](https://github.com/tinacms/tinacms/commit/166f380e886e88b9edc90948a4c2ca249244d6a3))
* **react-tinacms-editor:** InlineWysiwyg now accepts imageProps.directory ([f75d130](https://github.com/tinacms/tinacms/commit/f75d130855a24f5a3ccbbb6f19cef0a87e196ad3))
* **react-tinacms-inline:** previewUrl is now optionally async ([3aaead3](https://github.com/tinacms/tinacms/commit/3aaead34b759d3c8c12bbef75357a2e0925d2c10))





# [0.26.0](https://github.com/tinacms/tinacms/compare/v0.25.0...v0.26.0) (2020-08-03)


### Features

* add focus ring to inline wysiwyg ([2768afd](https://github.com/tinacms/tinacms/commit/2768afd1b69bdef2a3dce38dab6b71d002ddbad6))
* tooltips for menubar options ([bd06f11](https://github.com/tinacms/tinacms/commit/bd06f113e750b9845ed7e3a34c519562e665c99d))





# [0.25.0](https://github.com/tinacms/tinacms/compare/v0.24.0...v0.25.0) (2020-07-27)


### Bug Fixes

* table delete icon should be visible only if whole table is selected ([dd3313b](https://github.com/tinacms/tinacms/commit/dd3313b8215ab30ccbdfd377bbd92883570ad8a9))
* table row add delete icons overlapping ([cfa9949](https://github.com/tinacms/tinacms/commit/cfa9949c4580d09481362071e562fd7f795496d0))
* UX improvements hide title input from link modal ([6e5ab20](https://github.com/tinacms/tinacms/commit/6e5ab20631435508b1e16f7261b772008c3dda1d))





## [0.24.1-alpha.0](https://github.com/tinacms/tinacms/compare/v0.24.0...v0.24.1-alpha.0) (2020-07-22)


### Bug Fixes

* UX improvements hide title input from link modal ([6e5ab20](https://github.com/tinacms/tinacms/commit/6e5ab20))





## [0.8.5-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.4...react-tinacms-editor@0.8.5-alpha.0) (2020-07-15)

**Note:** Version bump only for package react-tinacms-editor





## [0.8.4](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.4-alpha.0...react-tinacms-editor@0.8.4) (2020-07-07)

**Note:** Version bump only for package react-tinacms-editor





## [0.8.4-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.3...react-tinacms-editor@0.8.4-alpha.0) (2020-07-04)


### Bug Fixes

* on updating editor state when new content is received and editor is not focused, editor histor should not be lost ([5c2e84d](https://github.com/tinacms/tinacms/commit/5c2e84d))





## [0.8.3](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.3-alpha.0...react-tinacms-editor@0.8.3) (2020-06-29)


### Bug Fixes

* extra paragraphs created while inserting table ([c369c18](https://github.com/tinacms/tinacms/commit/c369c18))





## [0.8.3-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.2...react-tinacms-editor@0.8.3-alpha.0) (2020-06-24)


### Bug Fixes

* fenced code blocks ([c666e49](https://github.com/tinacms/tinacms/commit/c666e49))





## [0.8.2](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.2-alpha.0...react-tinacms-editor@0.8.2) (2020-06-23)


### Bug Fixes

* code block breaking heading dropdown ([93419b4](https://github.com/tinacms/tinacms/commit/93419b4))
* improvements in code block ([9f2f853](https://github.com/tinacms/tinacms/commit/9f2f853))





## [0.8.2-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.1...react-tinacms-editor@0.8.2-alpha.0) (2020-06-17)

**Note:** Version bump only for package react-tinacms-editor





## [0.8.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.1-alpha.1...react-tinacms-editor@0.8.1) (2020-06-15)

**Note:** Version bump only for package react-tinacms-editor





## [0.8.1-alpha.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.1-alpha.0...react-tinacms-editor@0.8.1-alpha.1) (2020-06-12)


### Bug Fixes

* circular dependencies ([b4de165](https://github.com/tinacms/tinacms/commit/b4de165))
* code block node view ([295b69b](https://github.com/tinacms/tinacms/commit/295b69b))
* code mark should not exist with other marks ([480d21e](https://github.com/tinacms/tinacms/commit/480d21e))
* editor scrolling while changing mode ([da135d8](https://github.com/tinacms/tinacms/commit/da135d8))
* hybrid controlled behaviour for code-mirror editor within wysiwyg ([99b87f3](https://github.com/tinacms/tinacms/commit/99b87f3))
* making editor hybrid controlled ([11d034b](https://github.com/tinacms/tinacms/commit/11d034b))





## [0.8.1-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.8.0...react-tinacms-editor@0.8.1-alpha.0) (2020-06-08)

**Note:** Version bump only for package react-tinacms-editor





# [0.8.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.7.2...react-tinacms-editor@0.8.0) (2020-06-08)


### Bug Fixes

* making editor hybrid controlled ([0045700](https://github.com/tinacms/tinacms/commit/0045700))


### Features

* creating plugin for mode toggle menu component ([12255c8](https://github.com/tinacms/tinacms/commit/12255c8))





## [0.7.2](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.7.2-alpha.3...react-tinacms-editor@0.7.2) (2020-06-01)

**Note:** Version bump only for package react-tinacms-editor





## [0.7.2-alpha.3](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.7.2-alpha.2...react-tinacms-editor@0.7.2-alpha.3) (2020-06-01)

**Note:** Version bump only for package react-tinacms-editor





## [0.7.2-alpha.2](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.7.2-alpha.1...react-tinacms-editor@0.7.2-alpha.2) (2020-05-29)

**Note:** Version bump only for package react-tinacms-editor





## [0.7.2-alpha.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.7.2-alpha.0...react-tinacms-editor@0.7.2-alpha.1) (2020-05-28)

**Note:** Version bump only for package react-tinacms-editor





## [0.7.2-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.7.1...react-tinacms-editor@0.7.2-alpha.0) (2020-05-28)


### Bug Fixes

* add __type to field plugins ([4d1fb9f](https://github.com/tinacms/tinacms/commit/4d1fb9f))





## [0.7.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.7.0...react-tinacms-editor@0.7.1) (2020-05-25)

**Note:** Version bump only for package react-tinacms-editor





# [0.7.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.6.0...react-tinacms-editor@0.7.0) (2020-05-25)


### Features

* add tinacms field plugins ([20c9d0c](https://github.com/tinacms/tinacms/commit/20c9d0c))
* inline-wysiwyg component ([547a2d8](https://github.com/tinacms/tinacms/commit/547a2d8))
* raw mode implementation ([f8dcad7](https://github.com/tinacms/tinacms/commit/f8dcad7))





# [0.6.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.3...react-tinacms-editor@0.6.0) (2020-05-19)


### Features

* add strikethrough icon ([468b30c](https://github.com/tinacms/tinacms/commit/468b30c))
* support for strike in wysiwym ([c34b85b](https://github.com/tinacms/tinacms/commit/c34b85b))





## [0.5.3](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.2...react-tinacms-editor@0.5.3) (2020-05-12)

**Note:** Version bump only for package react-tinacms-editor





## [0.5.2](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.2-alpha.3...react-tinacms-editor@0.5.2) (2020-05-11)


### Bug Fixes

* close image popup and hitting delete button should delete image ([7459e09](https://github.com/tinacms/tinacms/commit/7459e09))
* link button should be disabled if selection is empty ([bef462c](https://github.com/tinacms/tinacms/commit/bef462c))





## [0.5.2-alpha.3](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.2-alpha.2...react-tinacms-editor@0.5.2-alpha.3) (2020-05-08)

**Note:** Version bump only for package react-tinacms-editor





## [0.5.2-alpha.2](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.2-alpha.1...react-tinacms-editor@0.5.2-alpha.2) (2020-05-08)

**Note:** Version bump only for package react-tinacms-editor





## [0.5.2-alpha.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.2-alpha.0...react-tinacms-editor@0.5.2-alpha.1) (2020-05-08)

**Note:** Version bump only for package react-tinacms-editor





## [0.5.2-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.1...react-tinacms-editor@0.5.2-alpha.0) (2020-05-06)


### Bug Fixes

* build ([3f305a0](https://github.com/tinacms/tinacms/commit/3f305a0))
* issue with table menu click event not trigerred ([5200514](https://github.com/tinacms/tinacms/commit/5200514))
* sticky menu useEffect dep list addition ([cb6e3bf](https://github.com/tinacms/tinacms/commit/cb6e3bf))
* table column row header style ([ea3fe97](https://github.com/tinacms/tinacms/commit/ea3fe97))





## [0.5.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.1-alpha.0...react-tinacms-editor@0.5.1) (2020-05-04)

**Note:** Version bump only for package react-tinacms-editor





## [0.5.1-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.0...react-tinacms-editor@0.5.1-alpha.0) (2020-04-28)

**Note:** Version bump only for package react-tinacms-editor





# [0.5.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.0-alpha.1...react-tinacms-editor@0.5.0) (2020-04-27)

**Note:** Version bump only for package react-tinacms-editor





# [0.5.0-alpha.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.5.0-alpha.0...react-tinacms-editor@0.5.0-alpha.1) (2020-04-24)


### Bug Fixes

* sticky menu useEffect dep list addition ([79f0f24](https://github.com/tinacms/tinacms/commit/79f0f24))





# [0.5.0-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.4.1-alpha.2...react-tinacms-editor@0.5.0-alpha.0) (2020-04-20)


### Bug Fixes

* core editor related code cleanup ([5bc1818](https://github.com/tinacms/tinacms/commit/5bc1818))


### Features

* image loading indicators ([ee11519](https://github.com/tinacms/tinacms/commit/ee11519))





## [0.4.1-alpha.2](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.4.1-alpha.1...react-tinacms-editor@0.4.1-alpha.2) (2020-04-14)


### Bug Fixes

* deleting code block ([cdf4a1c](https://github.com/tinacms/tinacms/commit/cdf4a1c))





## [0.4.1-alpha.1](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.4.1-alpha.0...react-tinacms-editor@0.4.1-alpha.1) (2020-04-07)


### Bug Fixes

* image should be deleted only after selection ([0e63237](https://github.com/tinacms/tinacms/commit/0e63237))





## [0.4.1-alpha.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.4.0...react-tinacms-editor@0.4.1-alpha.0) (2020-04-06)

**Note:** Version bump only for package react-tinacms-editor





# [0.4.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.3.0...react-tinacms-editor@0.4.0) (2020-04-06)


### Bug Fixes

* fix closing modal and clearing image ([8196da6](https://github.com/tinacms/tinacms/commit/8196da6))
* not possible to come out of code mark which is at end of line ([5c5fc93](https://github.com/tinacms/tinacms/commit/5c5fc93))


### Features

* adding menu option and modal to upload images ([675613a](https://github.com/tinacms/tinacms/commit/675613a))





# [0.3.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.2.0...react-tinacms-editor@0.3.0) (2020-03-30)


### Bug Fixes

* build ([3a80dfa](https://github.com/tinacms/tinacms/commit/3a80dfa))
* focus editor after inserting image ([f998841](https://github.com/tinacms/tinacms/commit/f998841))
* image props type ([198dc7d](https://github.com/tinacms/tinacms/commit/198dc7d))
* scroll view after inserting image ([c62b5b0](https://github.com/tinacms/tinacms/commit/c62b5b0))


### Features

* image drag drop support in wysiwym ([9a846c0](https://github.com/tinacms/tinacms/commit/9a846c0))
* inserting image on copy-paste ([003a910](https://github.com/tinacms/tinacms/commit/003a910))





# [0.2.0](https://github.com/tinacms/tinacms/compare/react-tinacms-editor@0.1.0...react-tinacms-editor@0.2.0) (2020-03-23)


### Bug Fixes

* export WysiwygProps ([8912849](https://github.com/tinacms/tinacms/commit/8912849))


### Features

* move theme system to css custom properties ([ba3bb22](https://github.com/tinacms/tinacms/commit/ba3bb22))





# 0.1.0 (2020-03-16)


### Features

* introduce react-tinacms-editor ([06bfb4b](https://github.com/tinacms/tinacms/commit/06bfb4b))
