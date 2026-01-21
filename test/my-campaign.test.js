import path from 'node:path'
import {describe, it} from 'node:test'

import getHtmlEmailContent from '../lib/utils/get-html-email-content.js'

import snapshotSerializer from './_helpers/snapshot-serializer.js'

describe('MyCampaign', () => {
  it('render 01 template', async ({assert}) => {
    const emailContent = await getHtmlEmailContent('my-campaign/01')

    assert.fileSnapshot(
      emailContent.html,
      path.join(import.meta.dirname, '01.html'),
      { serializers: snapshotSerializer() },
    )
  })
})
