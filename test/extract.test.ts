import { describe, expect, it } from 'vitest'
import { extractFontFaceData } from '../src/css/parse'

describe('extract font face from CSS', () => {
  it('should add declarations for `font-family`', async () => {
    expect(extractFontFaceData(`
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-display: swap;
      font-weight: 500;
      src: local("Open Sans"), url(./files/open-sans-latin-500-normal.woff2) format('woff2'), url(./files/open-sans-latin-500-normal.woff) format('woff');
      unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }
    `))
      .toMatchInlineSnapshot(`
        [
          {
            "display": "swap",
            "src": [
              {
                "name": "Open Sans",
              },
              {
                "format": "woff2",
                "url": "./files/open-sans-latin-500-normal.woff2",
              },
              {
                "format": "woff",
                "url": "./files/open-sans-latin-500-normal.woff",
              },
            ],
            "style": "normal",
            "unicodeRange": [
              "U+0000-00FF",
              "U+0131",
              "U+0152-0153",
              "U+02BB-02BC",
              "U+02C6",
              "U+02DA",
              "U+02DC",
              "U+0304",
              "U+0308",
              "U+0329",
              "U+2000-206F",
              "U+2074",
              "U+20AC",
              "U+2122",
              "U+2191",
              "U+2193",
              "U+2212",
              "U+2215",
              "U+FEFF",
              "U+FFFD",
            ],
            "weight": 500,
          },
        ]
      `)
  })
})
