import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1089229ea75380f99292d660af157b7c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'k-beuty & wellbeing',
  domain: 'jason.fiilit.co.kr',
  author: 'jason',
  seotitle: '케이뷰티앤웰빙',

  // open graph metadata (optional)
  description: '한국의 화장품 및 건강식품을 해외로 알립니다.',

  // social usernames (optional)
  // twitter: 'jotzilla',
  // github: 'verfasor',
  // linkedin: 'mighil',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://json.fiilit.co.kr/page-icon.png',
  defaultPageCover: 'https://json.fiilit.co.kr/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // og img
  ogImageUrl: 'https://json.fiilit.co.kr/og_img.png',

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '운동',
      pageId: 'fff9229ea75381ce85cfc3b3e935ca2a'
    },
  ]
})
