import { describe, jest } from '@jest/globals'

import enterpriseServerReleases from '#src/versions/lib/enterprise-server-releases.js'
import { get } from '#src/tests/helpers/e2etest.js'
import Page from '#src/frame/lib/page.js'

// The English content page's `versions:` frontmatter is the source
// of (convenient) truth about which versions of this page is available.
const page = await Page.init({
  basePath: 'content',
  relativePath: 'admin/release-notes.md',
  languageCode: 'en',
})

describe('server', () => {
  jest.setTimeout(60 * 1000)

  test('basic redirecting', async () => {
    const res = await get('/admin/release-notes')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      // Note that English is the default fallback for redirects
      `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/release-notes`,
    )
  })
  test('basic rendering', async () => {
    const res = await get('/admin/release-notes', { followAllRedirects: true })
    expect(res.statusCode).toBe(200)
  })

  const applicableVersions = page.applicableVersions.filter(
    // github-ae can't be deleted from the list of all versions until
    // all front matter and all Liquid is cleaned up. This is a legacy
    // version and we always redirect it out anyway to enterprise-cloud.
    (version) => version !== 'github-ae@latest',
  )

  test.each(applicableVersions)('version %s that has release-notes', async (version) => {
    const url = `/en/${version}/admin/release-notes`
    const res = await get(url)
    expect(res.statusCode).toBe(200)
  })
})
