import { BlockTemplate } from 'tinacms'

export type AddActionCallbackType = {
  (key?: string): void
}

export type AddActionType = {
  (
    blocks: { [key: string]: { template: BlockTemplate } },
    finish: AddActionCallbackType
  ): void
}
